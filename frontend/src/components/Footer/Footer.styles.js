export const footerStyles = {
  footerContainer: {
    position: 'relative',
    width: '100%',
    mt: { xs: 6, sm: 8, md: 10 },
    mb: 0,
  },
  separator: {
    width: '100%',
    height: '2px',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent 0%, rgba(255, 179, 71, 0.6) 20%, rgba(255, 179, 71, 1) 50%, rgba(255, 179, 71, 0.6) 80%, transparent 100%)'
      : 'linear-gradient(90deg, transparent 0%, rgba(255, 140, 0, 0.6) 20%, rgba(255, 140, 0, 1) 50%, rgba(255, 140, 0, 0.6) 80%, transparent 100%)',
    mb: { xs: 3, sm: 4 },
    borderRadius: '2px',
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 0 20px rgba(255, 179, 71, 0.3)'
      : '0 0 20px rgba(255, 140, 0, 0.2)',
  },
  footerContent: {
    textAlign: 'center',
    pb: { xs: 4, sm: 5, md: 6 },
    px: { xs: 2, sm: 3 },
  },
  copyrightText: {
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
    fontWeight: '500',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(0, 0, 0, 0.7)',
    letterSpacing: '0.5px',
    textShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 1px 3px rgba(0, 0, 0, 0.5)'
      : 'none',
    '& .year': {
      color: (theme) => theme.palette.mode === 'dark' 
        ? theme.palette.primary.light 
        : theme.palette.primary.main,
      fontWeight: '600',
    },
    '& .domain': {
      color: (theme) => theme.palette.mode === 'dark' 
        ? theme.palette.primary.light 
        : theme.palette.primary.main,
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        textShadow: (theme) => theme.palette.mode === 'dark'
          ? '0 0 8px rgba(255, 179, 71, 0.6)'
          : '0 0 8px rgba(255, 140, 0, 0.4)',
        transform: 'scale(1.02)',
      }
    }
  }
};