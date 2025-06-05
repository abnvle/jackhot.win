export const welcomeCardStyles = {
  container: {
    my: { xs: 2, sm: 4 },
    px: { xs: 1, sm: 2 }
  },
  paper: {
    p: { xs: 2, sm: 3, md: 4 }, 
    textAlign: 'center',
    borderRadius: 3,
    border: (theme) => theme.palette.mode === 'dark' 
      ? '1px solid rgba(255, 179, 71, 0.2)'
      : '1px solid rgba(255, 140, 0, 0.2)',
    boxShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(26, 26, 46, 0.5)'
      : '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  mainTitle: {
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    fontWeight: 'bold',
    background: (theme) => theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, #FFD700, #FF8C00)'
      : 'linear-gradient(45deg, #FF8C00, #FF6600)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: (theme) => theme.palette.mode === 'dark'
      ? '0 0 20px rgba(255, 215, 0, 0.5)'
      : '0 0 20px rgba(255, 140, 0, 0.3)',
  },
  subtitle: {
    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
    color: (theme) => theme.palette.mode === 'dark' 
      ? theme.palette.secondary.light 
      : theme.palette.secondary.main,
    fontWeight: '500'
  },
  description: {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    maxWidth: '600px',
    mx: 'auto',
    mt: 2
  }
};