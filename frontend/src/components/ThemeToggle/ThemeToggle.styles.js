import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const ThemeToggleContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 1000,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)',
  borderRadius: '16px',
  padding: '12px',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 179, 71, 0.2)'
    : '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 140, 0, 0.3)',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  border: 'none',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 179, 71, 0.4)'
      : '0 12px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 140, 0, 0.5)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: 16,
    right: 16,
    padding: '10px',
  },
}));

export const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFD700' : '#FF8C00',
  background: 'transparent',
  padding: '8px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.mode === 'dark' 
      ? 'rgba(255, 215, 0, 0.1)' 
      : 'rgba(255, 140, 0, 0.1)',
    transform: 'rotate(180deg)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.4rem',
    transition: 'all 0.3s ease-in-out',
    filter: theme.palette.mode === 'dark'
      ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
      : 'drop-shadow(0 0 8px rgba(255, 140, 0, 0.6))',
  },
}));

export const iconStyles = {
  light: {
    color: '#FFD700',
  },
  dark: {
    color: '#8A2BE2',
  }
};