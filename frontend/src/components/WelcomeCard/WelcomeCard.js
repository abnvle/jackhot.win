import React from 'react';
import { Container, Box } from '@mui/material';
import CountryButtons from '../CountryButtons';
import JackpotDisplay from '../JackpotDisplay';
import { welcomeCardStyles } from './WelcomeCard.styles';

const WelcomeCard = () => {
  return (
    <Container maxWidth="md">
      <Box sx={welcomeCardStyles.container}>
        <JackpotDisplay />
        <Box sx={{ mt: { xs: 6, sm: 8, md: 10 } }}>
          <CountryButtons />
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomeCard;