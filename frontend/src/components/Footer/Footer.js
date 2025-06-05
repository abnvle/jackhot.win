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
          <span className="year">2025</span> © <span className="domain">jackhot.win</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;