import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { countryButtonsStyles } from './CountryButtons.styles';

const CountryButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const countries = [
    {
      name: 'Gambia',
      flag: '/flags/gambia.png',
      url: 'https://jackhot.gm',
      alt: 'Flaga Gambii',
      backgroundPosition: 'center'
    },
    {
      name: 'Guiné-Bissau',
      flag: '/flags/gwinea_bissau.png',
      url: 'https://jackhot.gw',
      alt: 'Flaga Gwinei Bissau',
      backgroundPosition: 'center left'
    }
  ];

  const handleCountryClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <>
      {/* Główny nagłówek - inline style jako fallback */}
      <Box sx={{
        textAlign: 'center',
        mb: { xs: 4, sm: 5, md: 6 },
        position: 'relative',
      }}>
        <Typography sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          fontWeight: '900',
          fontFamily: '"Orbitron", "Rajdhani", "Exo 2", "Inter", sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FF6B35 50%, #FFD700 75%, #FFA500 100%)',
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3))',
          position: 'relative',
        }}>
          GO TO APP
        </Typography>
        <Typography sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif',
          color: (theme) => theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.6)'
            : 'rgba(0, 0, 0, 0.6)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          mt: 1,
          opacity: 0.8,
        }}>
          Choose your country
        </Typography>
      </Box>

      {/* Przyciski krajów */}
      <Box sx={countryButtonsStyles.container}>
        {countries.map((country, index) => (
          <Box
            key={country.name}
            onClick={() => handleCountryClick(country.url)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            sx={{
              ...countryButtonsStyles.button,
              backgroundImage: `url(${country.flag})`,
              backgroundSize: 'cover',
              backgroundPosition: country.backgroundPosition,
              backgroundRepeat: 'no-repeat',
              ...(hoveredButton === index ? countryButtonsStyles.buttonHover : {})
            }}
          >
            {/* Overlay z gradientem */}
            <Box 
              className="overlay"
              sx={countryButtonsStyles.overlay}
            />
            
            {/* Animowany tekst */}
            <Box 
              className="text-container"
              sx={countryButtonsStyles.textContainer}
            >
              <Typography sx={countryButtonsStyles.countryText}>
                {country.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CountryButtons;