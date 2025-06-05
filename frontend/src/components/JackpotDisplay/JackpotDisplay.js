import React, { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Typography, CircularProgress, Alert } from '@mui/material';
import { jackpotConfig } from '../../config/jackpotConfig';
import { jackpotDisplayStyles } from './JackpotDisplay.styles';

const JackpotDisplay = () => {
  const [jackpotData, setJackpotData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Funkcja formatowania wartości
  const formatValue = useCallback((value, country) => {
    if (typeof value !== 'number') return '0.00';
    
    const { formatting } = jackpotConfig;
    const countryConfig = jackpotConfig.countries[country];
    
    // Obcinanie do 2 miejsc po przecinku BEZ zaokrąglania
    const truncated = Math.floor(value * 100) / 100;
    
    // Formatowanie z separatorami
    const formatted = truncated.toLocaleString('en-US', {
      minimumFractionDigits: formatting.decimalPlaces,
      maximumFractionDigits: formatting.decimalPlaces,
    }).replace(/,/g, formatting.thousandsSeparator);
    
    return `${formatted} ${countryConfig.currencySymbol}`;
  }, []);

  // Funkcja pobierania danych dla konkretnego kraju
  const fetchCountryData = useCallback(async (countryKey, countryConfig) => {
    if (!countryConfig.endpoint) return null;
    
    try {
      const response = await fetch(countryConfig.endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK' || !data.response) {
        throw new Error('Invalid response format');
      }
      
      // Filtrowanie i mapowanie interesujących nas jackpotów
      const relevantJackpots = data.response
        .filter(jackpot => 
          jackpotConfig.jackpotTypes.some(type => type.name === jackpot.jpName)
        )
        .map(jackpot => {
          const typeConfig = jackpotConfig.jackpotTypes.find(type => type.name === jackpot.jpName);
          return {
            ...jackpot,
            displayName: typeConfig?.displayName || jackpot.jpName,
            color: typeConfig?.color || '#FFD700',
            colorLight: typeConfig?.color ? `${typeConfig.color}80` : '#FFD70080',
            icon: typeConfig?.icon, // ← DODANE
            priority: typeConfig?.priority || 999
          };
        })
        .sort((a, b) => a.priority - b.priority);
      
      return {
        country: countryKey,
        jackpots: relevantJackpots,
        timestamp: new Date().toISOString()
      };
    } catch (err) {
      console.error(`Error fetching data for ${countryKey}:`, err);
      throw err;
    }
  }, []);

  // Funkcja pobierania wszystkich danych
  const fetchAllData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const promises = Object.entries(jackpotConfig.countries).map(
        ([countryKey, countryConfig]) => 
          fetchCountryData(countryKey, countryConfig)
      );
      
      const results = await Promise.allSettled(promises);
      const newData = {};
      
      results.forEach((result, index) => {
        const countryKey = Object.keys(jackpotConfig.countries)[index];
        
        if (result.status === 'fulfilled' && result.value) {
          newData[countryKey] = result.value;
        } else if (result.status === 'rejected') {
          console.error(`Failed to fetch data for ${countryKey}:`, result.reason);
        }
      });
      
      setJackpotData(newData);
      setLastUpdate(new Date());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchCountryData]);

  // Efekt do pobierania danych i ustawiania interwału
  useEffect(() => {
    fetchAllData();
    
    const interval = setInterval(fetchAllData, jackpotConfig.refreshInterval);
    
    return () => clearInterval(interval);
  }, [fetchAllData]);

  // Renderowanie pojedynczego kraju
  const renderCountryCard = (countryKey, countryData) => {
    const countryConfig = jackpotConfig.countries[countryKey];
    
    return (
      <Paper key={countryKey} sx={jackpotDisplayStyles.countryCard}>
        <Box 
          sx={{
            ...jackpotDisplayStyles.countryHeader,
            backgroundImage: `url(${countryConfig.flag})`
          }}
        >
          <Typography sx={jackpotDisplayStyles.countryName}>
            {countryConfig.name}
          </Typography>
        </Box>
        
        <Box sx={jackpotDisplayStyles.jackpotsContainer}>
          {countryData.jackpots.map((jackpot) => (
            <Box 
              key={jackpot.id} 
              sx={{
                ...jackpotDisplayStyles.jackpotItem,
                '--jackpot-color': jackpot.color,
                '--jackpot-color-light': jackpot.colorLight,
              }}
            >
              {/* DODANE - Renderowanie nazwy z ikonkami */}
              {jackpot.icon ? (
                <Box component="span" sx={jackpotDisplayStyles.jackpotName}>
                  <Box
                    component="img"
                    src={jackpot.icon}
                    alt="Crown"
                    sx={jackpotDisplayStyles.jackpotNameIcon}
                  />
                  {jackpot.displayName}
                  <Box
                    component="img"
                    src={jackpot.icon}
                    alt="Crown"
                    sx={jackpotDisplayStyles.jackpotNameIcon}
                  />
                </Box>
              ) : (
                <Typography sx={jackpotDisplayStyles.jackpotName}>
                  {jackpot.displayName}
                </Typography>
              )}
              
              <Typography sx={jackpotDisplayStyles.jackpotValue}>
                {formatValue(jackpot.actualValue, countryKey)}
              </Typography>
            </Box>
          ))}
          
          <Typography sx={jackpotDisplayStyles.lastUpdate}>
            Ostatnia aktualizacja: {new Date(countryData.timestamp).toLocaleTimeString()}
          </Typography>
        </Box>
      </Paper>
    );
  };

  if (loading && Object.keys(jackpotData).length === 0) {
    return (
      <Box sx={jackpotDisplayStyles.container}>
        <Box sx={jackpotDisplayStyles.loadingContainer}>
          <CircularProgress 
            size={50} 
            thickness={4}
            sx={{
              color: (theme) => theme.palette.mode === 'dark' ? '#FFD700' : '#FF8C00'
            }}
          />
          <Typography sx={jackpotDisplayStyles.loadingText}>
            Ładowanie jackpotów...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error && Object.keys(jackpotData).length === 0) {
    return (
      <Box sx={jackpotDisplayStyles.container}>
        <Alert 
          severity="error" 
          sx={jackpotDisplayStyles.errorContainer}
          variant="outlined"
        >
          <Typography variant="h6" gutterBottom>
            Błąd podczas ładowania jackpotów
          </Typography>
          <Typography variant="body2">
            {error}
          </Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <>
      {/* Główny nagłówek */}
      <Box sx={jackpotDisplayStyles.mainTitle}>
        <Typography sx={jackpotDisplayStyles.mainTitleText}>
          JACKPOT'S LIVE
        </Typography>
        <Typography sx={jackpotDisplayStyles.mainTitleSubtext}>
          Real-time jackpots
        </Typography>
      </Box>
      
      {/* Karty krajów */}
      <Box sx={jackpotDisplayStyles.container}>
        {Object.entries(jackpotData).map(([countryKey, countryData]) =>
          renderCountryCard(countryKey, countryData)
        )}
      </Box>
    </>
  );
};

export default JackpotDisplay;