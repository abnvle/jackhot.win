export const footerStyles = {
  footerContainer: {
    position: 'relative',
    width: '100%',
    mt: { xs: 6, sm: 8, md: 10 },
    mb: 0,
    background: (theme) => theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.02)'
      : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderTop: (theme) => `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(0, 0, 0, 0.06)'}`,
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 -4px 20px rgba(0, 0, 0, 0.3)'
      : '0 -4px 20px rgba(0, 0, 0, 0.08)',
  },
  separator: {
    width: '100%',
    height: '2px',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.4) 20%, rgba(255, 215, 0, 0.8) 50%, rgba(255, 215, 0, 0.4) 80%, transparent 100%)'
      : 'linear-gradient(90deg, transparent 0%, rgba(255, 165, 0, 0.4) 20%, rgba(255, 165, 0, 0.8) 50%, rgba(255, 165, 0, 0.4) 80%, transparent 100%)',
    mb: { xs: 3, sm: 4 },
    borderRadius: '2px',
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 0 20px rgba(255, 215, 0, 0.3)'
      : '0 0 20px rgba(255, 165, 0, 0.2)',
  },
  footerContent: {
    textAlign: 'center',
    pb: { xs: 4, sm: 5, md: 6 },
    px: { xs: 2, sm: 3 },
  },
  copyrightText: {
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
    fontWeight: '500',
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.6)',
    letterSpacing: '0.5px',
    textShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 1px 3px rgba(0, 0, 0, 0.5)'
      : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: { xs: '8px', sm: '10px' },
    '& .year': {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B35 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700',
      filter: 'brightness(1.1)',
      letterSpacing: '0.5px',
    },
    '& .domain': {
      position: 'relative',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B35 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'brightness(1.1)',
      letterSpacing: '0.5px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #FFD700, #FFA500, #FF6B35)',
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transition: 'transform 0.3s ease',
      },
      '&:hover': {
        '&::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'left',
        },
        filter: 'brightness(1.2)',
      },
    }
  }
};