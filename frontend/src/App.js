import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { CustomThemeProvider, useTheme } from './contexts/ThemeContext';
import WelcomeCard from './components/WelcomeCard';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import Logo from './components/Logo';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        <ThemeToggle />
        <Logo />
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 1, sm: 2, md: 3 }
        }}>
          <WelcomeCard />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;