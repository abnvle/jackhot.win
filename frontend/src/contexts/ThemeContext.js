import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Domyślnie ciemny motyw

  // Sprawdzanie zapisanych preferencji przy pierwszym załadowaniu
  useEffect(() => {
    const savedTheme = localStorage.getItem('jackhot-theme');
    
    if (savedTheme !== null) {
      // Jeśli jest zapisana preferencja, użyj jej
      setDarkMode(JSON.parse(savedTheme));
      console.log('Załadowano zapisany motyw:', JSON.parse(savedTheme) ? 'ciemny' : 'jasny');
    } else {
      // Jeśli nie ma zapisanej preferencji, użyj domyślnego ciemnego motywu
      setDarkMode(true);
      console.log('Używam domyślnego ciemnego motywu');
    }
  }, []);

  // Zapisywanie preferencji motywu przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('jackhot-theme', JSON.stringify(darkMode));
    console.log('Zapisano motyw do localStorage:', darkMode ? 'ciemny' : 'jasny');
  }, [darkMode]);

  // Tworzenie motywu na podstawie trybu - kolorystyka JackHot
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#FFB347' : '#FF8C00', // Pomarańczowy/złoty
        light: darkMode ? '#FFD700' : '#FFA500',
        dark: darkMode ? '#FF8C00' : '#FF6600',
      },
      secondary: {
        main: darkMode ? '#8A2BE2' : '#6A1B9A', // Fioletowy
        light: darkMode ? '#9370DB' : '#8E24AA',
        dark: darkMode ? '#4B0082' : '#4A148C',
      },
      background: {
        default: darkMode ? '#1A1A2E' : '#F5F5F5', // Ciemny granat / jasny szary
        paper: darkMode ? '#16213E' : '#FFFFFF',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#2E2E2E',
        secondary: darkMode ? '#B0B0B0' : '#666666',
      },
      info: {
        main: darkMode ? '#00CED1' : '#0891B2', // Turkusowy
      },
      success: {
        main: darkMode ? '#32CD32' : '#22C55E', // Zielony
      },
      warning: {
        main: darkMode ? '#FFD700' : '#F59E0B', // Złoty
      },
      error: {
        main: darkMode ? '#FF6347' : '#EF4444', // Czerwony
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: darkMode 
              ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 245, 0.9) 100%)',
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    console.log('Przełączono motyw na:', newMode ? 'ciemny' : 'jasny');
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};