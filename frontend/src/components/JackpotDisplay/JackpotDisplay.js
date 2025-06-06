import React, { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Typography, CircularProgress, Alert } from '@mui/material';
import { jackpotConfig } from '../../config/jackpotConfig';
import { jackpotDisplayStyles } from './JackpotDisplay.styles';

const JackpotDisplay = () => {
  const [jackpotData, setJackpotData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Mapa krajów z URL-ami aplikacji i flagami
  const countryUrls = {
    gambia: 'https://jackhot.gm',
    guineaBissau: 'https://jackhot.gw',
    kenya: 'https://jackhot.ke', // Domyślny URL dla Kenii
  };

  // Mapa flag krajów
  const countryFlags = {
    gambia: '/flags/gambia.png',
    guineaBissau: '/flags/gwinea_bissau.png',
    kenya: '/flags/kenia.png',
  };

  // Mapa nazw krajów
  const countryNames = {
    gambia: 'Gambia',
    guineaBissau: 'Guiné-Bissau',
    kenya: 'Kenya',
  };

  // Mapa logo płatności dla krajów
  const countryPayments = {
    gambia: [
      { name: 'Wave', logo: '/images/payments/wave.png' }
    ],
    guineaBissau: [
      { name: 'Orange Money', logo: '/images/payments/orange_money.png' }
    ],
    kenya: [
      { name: 'ZaxPesa', logo: '/images/payments/zaxpesa.jpeg' }
    ],
  };

  // Funkcja obsługi kliknięcia w flagę
  const handleCountryClick = (countryKey) => {
    const url = countryUrls[countryKey];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Funkcje hover dla flag
  const handleMouseEnter = (countryKey) => {
    setHoveredCountry(countryKey);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

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
            icon: typeConfig?.icon,
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
    const isHovered = hoveredCountry === countryKey;
    const hasUrl = countryUrls[countryKey];
    const flagUrl = countryFlags[countryKey];
    const countryDisplayName = countryNames[countryKey];
    const payments = countryPayments[countryKey] || [];
    
    return (
      <Paper key={countryKey} sx={jackpotDisplayStyles.countryCard}>
        {/* Nagłówek z flagą i nazwą kraju */}
        <Box 
          onClick={() => hasUrl && handleCountryClick(countryKey)}
          onMouseEnter={() => hasUrl && handleMouseEnter(countryKey)}
          onMouseLeave={() => hasUrl && handleMouseLeave()}
          sx={{
            ...jackpotDisplayStyles.countryHeader,
            cursor: hasUrl ? 'pointer' : 'default',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            background: 'transparent', // Przezroczyste tło
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            py: 2,
          }}
        >
          {/* Gradient overlay dla lepszego kontrastu */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isHovered 
                ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.15) 100%)'
                : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)',
              transition: 'all 0.3s ease',
              zIndex: 1,
              borderRadius: '12px 12px 0 0',
            }}
          />

          {/* Flaga kraju */}
          <Box
            component="img"
            src={flagUrl}
            alt={`${countryDisplayName} flag`}
            sx={{
              width: { xs: '40px', sm: '48px' },
              height: { xs: '28px', sm: '32px' },
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              objectFit: 'cover',
              transition: 'all 0.3s ease',
              zIndex: 2,
              position: 'relative',
              ...(isHovered && {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                border: '2px solid rgba(255, 215, 0, 0.8)',
              })
            }}
            onError={(e) => {
              // Fallback jeśli flaga się nie załaduje
              e.target.style.display = 'none';
            }}
          />

          {/* Nazwa kraju */}
          <Typography 
            sx={{
              position: 'relative',
              zIndex: 3,
              color: (theme) => theme.palette.mode === 'dark' 
                ? (isHovered ? '#FFD700' : 'rgba(255, 255, 255, 0.9)')
                : (isHovered ? '#FF8C00' : 'rgba(0, 0, 0, 0.8)'),
              textShadow: (theme) => theme.palette.mode === 'dark'
                ? '2px 2px 4px rgba(0,0,0,0.8)'
                : '1px 1px 2px rgba(255,255,255,0.8)',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              fontWeight: '700',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              fontFamily: '"Poppins", "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            {countryDisplayName}
          </Typography>

          {/* Ikonka strzałki po prawej stronie */}
          {hasUrl && (
            <Box
              sx={{
                position: 'relative',
                zIndex: 4,
                fontSize: '18px',
                color: (theme) => theme.palette.mode === 'dark' 
                  ? (isHovered ? '#FFD700' : 'rgba(255, 255, 255, 0.7)')
                  : (isHovered ? '#FF8C00' : 'rgba(0, 0, 0, 0.6)'),
                transition: 'all 0.3s ease',
                opacity: isHovered ? 1 : 0.7,
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                '&::before': {
                  content: '"→"',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }
              }}
            />
          )}
        </Box>
        
        {/* Kontener z jackpotami */}
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
              {/* Renderowanie nazwy z ikonkami */}
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
          
          {/* Sekcja z płatnościami */}
          <Box sx={jackpotDisplayStyles.paymentsContainer}>
            <Typography sx={jackpotDisplayStyles.paymentsLabel}>
             
            </Typography>
            <Box sx={jackpotDisplayStyles.paymentLogosContainer}>
              {payments.map((payment, index) => (
                <Box
                  key={index}
                  component="img"
                  src={payment.logo}
                  alt={payment.name}
                  title={payment.name}
                  sx={jackpotDisplayStyles.paymentLogoOriginal}
                  onError={(e) => {
                    // Fallback jeśli logo się nie załaduje
                    e.target.style.display = 'none';
                    console.error(`Could not load ${payment.name} payment logo`);
                  }}
                />
              ))}
            </Box>
          </Box>
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
            Loading jackpot's...
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
            Error loading jackpots
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
          Real-time jackpots - Click country header to enter app
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