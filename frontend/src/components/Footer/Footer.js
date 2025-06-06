import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerStyles } from './Footer.styles';

const Footer = () => {
  return (
    <Box sx={footerStyles.footerContainer}>
      {/* Stylowy separator */}
      <Box sx={footerStyles.separator} />
      
      {/* Treść stopki */}
      <Box sx={footerStyles.footerContent}>
        <Typography sx={footerStyles.copyrightText}>
          <span className="year">2025</span> © <a 
            href="https://jackhot.win" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="domain"
          >
            jackhot.win
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;