export const jackpotDisplayStyles = {
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
    alignItems: 'flex-start',
    gap: { xs: 2, sm: 3, md: 4 },
    mt: { xs: 3, sm: 4 },
    flexWrap: 'wrap',
    px: { xs: 2, sm: 0 },
  },
  countryCard: {
    minWidth: { xs: '280px', sm: '300px', md: '320px' },
    maxWidth: { xs: '300px', sm: '320px', md: '340px' },
    borderRadius: '12px',
    overflow: 'hidden',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: (theme) => theme.palette.mode === 'dark' 
      ? '1px solid rgba(255, 255, 255, 0.08)'
      : '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
      : '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: (theme) => theme.palette.mode === 'dark'
        ? '0 8px 30px rgba(0, 0, 0, 0.4)'
        : '0 8px 30px rgba(0, 0, 0, 0.12)',
    }
  },
  countryHeader: {
    height: '70px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 212, 0, 0.1) 100%)',
      backdropFilter: 'blur(5px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '10%',
      right: '10%',
      height: '3px',
      background: 'linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFA500 50%, #FFD700 80%, transparent 100%)',
      borderRadius: '2px',
      boxShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
    }
  },
  countryName: {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: '"Poppins", "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.1)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #e8ecff 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&::before': {
      content: '"🎰"',
      fontSize: '18px',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
      WebkitTextFillColor: 'initial',
    },
    '&::after': {
      content: '"💎"',
      fontSize: '18px',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
      WebkitTextFillColor: 'initial',
    }
  },
  jackpotsContainer: {
    p: 2.5,
  },
  jackpotItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 1.5,
    px: 0,
    borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.06)' 
      : 'rgba(0, 0, 0, 0.04)'}`,
    transition: 'all 0.2s ease',
    '&:last-child': {
      borderBottom: 'none',
      pb: 0,
    },
    '&:hover': {
      transform: 'translateX(2px)',
    }
  },
  jackpotName: {
    fontWeight: '500',
    fontSize: '13px',
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(0, 0, 0, 0.7)',
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  jackpotNameIcon: {
    width: '14px',
    height: '14px',
    opacity: 0.8,
    filter: (theme) => theme.palette.mode === 'dark' 
      ? 'brightness(1.2)'
      : 'brightness(0.8)',
    alignSelf: 'center',
    flexShrink: 0,
  },
  jackpotValue: {
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: '"JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace',
    textAlign: 'right',
    lineHeight: 1.2,
    color: 'var(--jackpot-color)',
    textShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 1px 2px rgba(0,0,0,0.3)'
      : 'none',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    gap: 1.5,
  },
  loadingText: {
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.6)'
      : 'rgba(0, 0, 0, 0.5)',
  },
  errorContainer: {
    textAlign: 'center',
    p: 3,
    borderRadius: '12px',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'rgba(244, 67, 54, 0.08)'
      : 'rgba(244, 67, 54, 0.04)',
    border: (theme) => `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(244, 67, 54, 0.2)' 
      : 'rgba(244, 67, 54, 0.1)'}`,
  },
  lastUpdate: {
    textAlign: 'center',
    fontSize: '11px',
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)',
    mt: 2,
    letterSpacing: '0.2px',
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
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 1,
      transform: 'translateY(-50%) scale(1)',
    },
    '50%': {
      opacity: 0.7,
      transform: 'translateY(-50%) scale(1.1)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(-50%) scale(1)',
    }
  }
};