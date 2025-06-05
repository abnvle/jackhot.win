import React from 'react';
import { Box } from '@mui/material';
import { logoStyles } from './Logo.styles';

const Logo = () => {
  return (
    <Box sx={logoStyles.container}>
      <Box
        component="img"
        src="/logo.png"
        alt="JackHot Casino Logo"
        sx={logoStyles.logoImage}
        onError={(e) => {
          console.warn('Logo nie zostało znalezione w /public/logo.png');
          e.target.style.display = 'none';
        }}
      />
    </Box>
  );
};

export default Logo;