import React from 'react';
import { Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  ThemeToggleContainer, 
  AnimatedIconButton, 
  iconStyles 
} from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <ThemeToggleContainer onClick={toggleDarkMode}>
      <Tooltip 
        title={darkMode ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"} 
        placement="left"
        arrow
      >
        <AnimatedIconButton size="medium">
          {darkMode ? (
            <LightModeIcon sx={iconStyles.light} />
          ) : (
            <DarkModeIcon sx={iconStyles.dark} />
          )}
        </AnimatedIconButton>
      </Tooltip>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;