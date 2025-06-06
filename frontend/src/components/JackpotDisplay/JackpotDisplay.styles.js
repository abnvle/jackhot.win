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
    height: { xs: '70px', sm: '80px' }, // Responsywna wysokość
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    userSelect: 'none',
    background: 'transparent',
    borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(0, 0, 0, 0.06)'}`,
    gap: { xs: 1.5, sm: 2 }, // Responsywny gap
    py: { xs: 1.5, sm: 2 }, // Responsywny padding
    
    // Dolny pasek złoty
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '10%',
      right: '10%',
      height: { xs: '2px', sm: '2px' },
      background: 'linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFA500 50%, #FFD700 80%, transparent 100%)',
      borderRadius: '1px',
      boxShadow: '0 0 8px rgba(255, 215, 0, 0.4)',
      zIndex: 3,
    }
  },
  
  // Styl dla hovera nagłówka - dynamiczny overlay
  countryHeaderHover: {
    '&::before': {
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.3) 100%)',
    },
  },
  
  // Biały krąg w centrum (tło dla ikonki play)
  countryHeaderPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    opacity: 0.8,
    transition: 'all 0.3s ease',
    zIndex: 2,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    
    // Hover effect dla przycisku
    '&.hovered': {
      background: 'rgba(255, 255, 255, 0.9)',
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1.1)',
    }
  },
  
  // Ikonka play w środku
  countryHeaderPlayIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 4,
    fontSize: '24px',
    color: '#666',
    transition: 'all 0.3s ease',
    
    '&::before': {
      content: '"▶"',
      fontSize: '20px',
    },
    
    // Hover effect dla ikonki
    '&.hovered': {
      color: '#333',
      transform: 'translate(-50%, -50%) scale(1.2)',
    }
  },
  
  // Tekst instrukcji przy hover
  countryHeaderInstructions: {
    position: 'absolute',
    bottom: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0,
    transform: 'translateX(-50%) translateY(10px)',
    transition: 'all 0.3s ease',
    
    // Animacja pojawiania się
    '&.visible': {
      opacity: 1,
      transform: 'translateX(-50%) translateY(0)',
    }
  },

  countryName: {
    // Style przeniesione do inline w komponencie
    // Ten obiekt może zostać usunięty jeśli nie jest używany gdzie indziej
  },
  
  jackpotsContainer: {
    p: { xs: 2, sm: 2.5 },
    background: (theme) => theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.02)'
      : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '0 0 12px 12px',
  },
  jackpotItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: { xs: 2, sm: 1.5 },
    px: { xs: 2, sm: 1.5 },
    mb: { xs: 1.5, sm: 1 },
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
    border: (theme) => `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0.8)'}`,
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 4px 16px rgba(0, 0, 0, 0.3)'
      : '0 4px 16px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    minHeight: { xs: '60px', sm: '50px' }, // Minimalna wysokość
    gap: { xs: 1, sm: 0.5 }, // Gap między elementami
    '&:last-child': {
      mb: 0,
    },
    '&:hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: (theme) => theme.palette.mode === 'dark'
        ? '0 8px 25px rgba(0, 0, 0, 0.4)'
        : '0 8px 25px rgba(0, 0, 0, 0.15)',
    }
  },
  jackpotName: {
    fontWeight: '700',
    fontSize: { xs: '12px', sm: '11px' }, // Mniejszy rozmiar dla lepszego dopasowania
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.9)'
      : 'rgba(0, 0, 0, 0.8)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '6px', sm: '5px' }, // Mniejszy gap
    lineHeight: 1.2,
    flex: '0 0 auto', // Nie rozciągaj się
    minWidth: 'fit-content',
    whiteSpace: 'nowrap', // Zapobiega zawijaniu tekstu
  },
  jackpotNameIcon: {
    width: { xs: '14px', sm: '12px' }, // Mniejsze ikonki
    height: { xs: '14px', sm: '12px' },
    opacity: 0.9,
    filter: (theme) => theme.palette.mode === 'dark' 
      ? 'brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
      : 'brightness(0.9) drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
    alignSelf: 'center',
    flexShrink: 0,
  },
  jackpotValue: {
    fontWeight: '900',
    fontSize: { xs: '16px', sm: '15px' }, // Zmniejszony rozmiar
    fontFamily: '"JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace',
    textAlign: 'right',
    lineHeight: 1.1,
    color: 'var(--jackpot-color)',
    textShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 2px 8px rgba(0,0,0,0.5), 0 0 20px var(--jackpot-color-light)'
      : '0 2px 4px rgba(0,0,0,0.2)',
    flex: '1 1 auto', // Zajmij dostępną przestrzeń
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: { xs: '12px', sm: '8px' }, // Mniejszy padding
    whiteSpace: 'nowrap', // KLUCZOWE: zapobiega zawijaniu kwoty!
    overflow: 'hidden', // Ukryj overflow
    minWidth: '0', // Pozwala na flex shrink
    background: (theme) => theme.palette.mode === 'dark'
      ? `linear-gradient(90deg, transparent 0%, var(--jackpot-color-light) 100%)`
      : `linear-gradient(90deg, transparent 0%, var(--jackpot-color-light) 100%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    filter: 'brightness(1.1)',
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
    fontSize: { xs: '11px', sm: '10px' },
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)',
    mt: { xs: 2, sm: 1.5 },
    letterSpacing: '0.3px',
    fontWeight: '400',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.02)'
      : 'rgba(0, 0, 0, 0.02)',
    py: 1,
    borderRadius: '6px',
  },

  // === SEKCJA PŁATNOŚCI ===
  paymentLogosContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },

  paymentsLabel: {
    fontSize: '11px',
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    color: (theme) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  paymentLogoOriginal: {
    height: '24px', // Reduced from previous size
    width: 'auto', // Maintain aspect ratio
    maxWidth: '60px', // Limit maximum width
    opacity: 0.8,
    transition: 'opacity 0.2s ease',
    filter: (theme) => theme.palette.mode === 'dark' 
      ? 'brightness(1.1)'
      : 'brightness(0.9)',
    '&:hover': {
      opacity: 1,
    },
    objectFit: 'contain', // Ensure image fits while maintaining aspect ratio
    borderRadius: '4px', // Optional: slight rounding of corners
  },
  
  // === ANIMACJE ===
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
  },
  '@keyframes fadeInUp': {
    'from': {
      opacity: 0,
      transform: 'translateX(-50%) translateY(10px)',
    },
    'to': {
      opacity: 1,
      transform: 'translateX(-50%) translateY(0)',
    },
  },
  '@keyframes scaleIn': {
    'from': {
      transform: 'translate(-50%, -50%) scale(0.8)',
      opacity: 0,
    },
    'to': {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: 1,
    },
  },
  '@keyframes bounceIn': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(0.3)',
      opacity: 0,
    },
    '50%': {
      transform: 'translate(-50%, -50%) scale(1.05)',
      opacity: 0.8,
    },
    '70%': {
      transform: 'translate(-50%, -50%) scale(0.9)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: 1,
    },
  },
  
  // === RESPONSYWNE STYLE ===
  // Dla małych ekranów - zmniejszone efekty
  '@media (max-width: 768px)': {
    countryHeader: {
      height: '70px !important',
      gap: '12px !important',
      py: '12px !important',
    },
    countryHeaderPlayButton: {
      width: '50px',
      height: '50px',
    },
    countryHeaderPlayIcon: {
      fontSize: '18px',
      '&::before': {
        fontSize: '16px',
      }
    },
    countryHeaderInstructions: {
      fontSize: '0.7rem',
      padding: '3px 10px',
    },
    // Dodatkowe style dla lepszej czytelności jackpotów na mobile
    jackpotItem: {
      py: '14px !important',
      px: '12px !important',
      mb: '10px !important',
      minHeight: '55px !important',
      gap: '8px !important',
      '&:active': {
        transform: 'scale(0.98)',
        boxShadow: (theme) => theme.palette.mode === 'dark'
          ? '0 2px 12px rgba(0, 0, 0, 0.4) !important'
          : '0 2px 12px rgba(0, 0, 0, 0.15) !important',
      }
    },
    jackpotValue: {
      fontSize: '15px !important',
      fontWeight: '900 !important',
      paddingLeft: '8px !important',
    },
    jackpotName: {
      fontSize: '11px !important',
      fontWeight: '700 !important',
      gap: '4px !important',
    },
    jackpotNameIcon: {
      width: '12px !important',
      height: '12px !important',
    },
    countryCard: {
      minWidth: '300px',
      maxWidth: '350px',
    },
    jackpotsContainer: {
      p: '14px !important',
    }
  },
  
  // Dodatkowe style dla bardzo małych ekranów
  '@media (max-width: 480px)': {
    jackpotValue: {
      fontSize: '14px !important',
    },
    jackpotName: {
      fontSize: '10px !important',
    },
    jackpotItem: {
      py: '12px !important',
      px: '10px !important',
      gap: '6px !important',
    },
    countryCard: {
      minWidth: '280px',
      maxWidth: '320px',
    }
  },
  
  // Style dla ekranów większych niż tablet (DESKTOP)
  '@media (min-width: 769px)': {
    countryHeader: {
      height: '85px !important', // Większy nagłówek na desktop
      gap: '20px !important', // Większy gap między flagą a tekstem
      py: '20px !important',
    },
    jackpotValue: {
      fontSize: '17px !important', // Większy na desktop
    },
    jackpotName: {
      fontSize: '12px !important',
    },
    jackpotItem: {
      py: '16px !important',
      px: '16px !important',
      mb: '12px !important',
    },
    jackpotsContainer: {
      p: '20px !important', // Większy padding na desktop
    },
    countryCard: {
      minWidth: '320px',
      maxWidth: '380px', // Szersze karty na desktop
    }
  },
  
  // Style dla bardzo dużych ekranów
  '@media (min-width: 1200px)': {
    countryHeader: {
      height: '90px !important', // Jeszcze większy na dużych ekranach
      gap: '24px !important',
    },
    jackpotValue: {
      fontSize: '18px !important',
    },
    jackpotName: {
      fontSize: '13px !important',
    },
    countryCard: {
      minWidth: '340px',
      maxWidth: '400px',
    }
  }
};