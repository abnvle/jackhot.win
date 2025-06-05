export const countryButtonsStyles = {
  mainTitle: {
    textAlign: 'center',
    mb: { xs: 4, sm: 5, md: 6 },
    position: 'relative',
  },
  mainTitleText: {
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
    animation: 'shimmer 3s ease-in-out infinite',
    filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3))',
    position: 'relative',
  },
  mainTitleSubtext: {
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
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 3, sm: 3, md: 4 },
    mt: { xs: 3, sm: 4 }, // Zwiększony margines top - taki sam jak między logo a kontenerem
    flexWrap: 'wrap',
    px: { xs: 2, sm: 0 },
  },
  button: {
    position: 'relative',
    // Proporcje flag krajowych to zazwyczaj 3:2, więc dopasowujemy rozmiary
    width: { xs: '240px', sm: '240px', md: '300px' },
    height: { xs: '160px', sm: '160px', md: '200px' }, // Proporcje 3:2 = 1.5:1
    borderRadius: '16px',
    padding: 0,
    border: 'none',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.4)'
      : '0 8px 32px rgba(0, 0, 0, 0.15)',
    filter: { xs: 'brightness(1.3)', md: 'brightness(1.4)' },
    '&:hover': {
      transform: 'translateY(-8px) scale(1.05)',
      boxShadow: (theme) => theme.palette.mode === 'dark'
        ? '0 16px 48px rgba(0, 0, 0, 0.6)'
        : '0 16px 48px rgba(0, 0, 0, 0.25)',
    },
    '&:active': {
      transform: 'translateY(-4px) scale(1.02)',
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: {
      xs: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)',
      md: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)'
    },
    borderRadius: '16px',
    transition: 'all 0.4s ease-in-out',
  },
  textContainer: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: { xs: 1, md: 0 },
    transform: { xs: 'translateY(0px)', md: 'translateY(20px)' },
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  countryText: {
    color: '#FFFFFF',
    fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.5rem' },
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
    letterSpacing: '0.5px',
  },
  buttonHover: {
    '& .overlay': {
      background: {
        xs: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)',
        md: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)'
      }
    },
    '& .text-container': {
      opacity: 1,
      transform: 'translateY(0px)',
    }
  },
  // Animacje
  '@keyframes shimmer': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    }
  }
};