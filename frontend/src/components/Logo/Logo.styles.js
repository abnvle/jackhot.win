export const logoStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pt: { xs: 2, sm: 3 },
    pb: { xs: 1, sm: 2 },
  },
  logoImage: {
    maxWidth: { xs: '300px', sm: '300px', md: '600px' },
    width: '100%',
    height: 'auto',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }
};