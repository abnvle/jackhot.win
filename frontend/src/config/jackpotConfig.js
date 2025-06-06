export const jackpotConfig = {
  // Interwał odświeżania danych (w milisekundach)
  refreshInterval: 30000, // 30 sekund

  // Konfiguracja krajów i ich endpointów
  countries: {
    gambia: {
      name: 'Gambia',
      code: 'GM',
      endpoint: 'https://app.jackhot.win/frontoffice/rest/jackpot/statuses?barId=89',
      flag: '/flags/gambia.png',
      currency: 'GMD', // Dalasi gambijskie
      currencySymbol: 'D'
    },
    guineaBissau: {
      name: 'Guiné-Bissau',
      code: 'GW',
      endpoint: 'https://app.jackhot.win/frontoffice/rest/jackpot/statuses?barId=89',
      flag: '/flags/gwinea_bissau.png',
      currency: 'XOF', // Frank CFA
      currencySymbol: 'CFA'
    },
    kenya: {
      name: 'Kenya',
      code: 'KE',
      endpoint: 'https://app.jackhot.win/frontoffice/rest/jackpot/statuses?barId=89', // Ten sam endpoint na razie
      flag: '/flags/kenia.png',
      currency: 'KES', // Szyling kenijski
      currencySymbol: 'KSh'
    }
  },

  // Interesujące nas typy jackpotów (w kolejności wyświetlania)
  jackpotTypes: [
    {
      name: 'ROYAL',
      displayName: 'Royal',
      color: '#FFD700',
      colorAlt: '#FFA500',
      icon: '/images/icons/icon-crown2.png',
      priority: 1
    },
    {
      name: 'HOT',
      displayName: 'Hot',
      color: '#FF6B35',
      colorAlt: '#FF8C42',
      icon: '/images/icons/icon-pepper2.png',
      priority: 2
    },
    {
      name: 'DAILY',
      displayName: 'Daily',
      color: '#4ECDC4',
      colorAlt: '#44A08D',
      icon: '/images/icons/icon-daisy2.png',
      priority: 3
    }
  ],

  // Ustawienia formatowania
  formatting: {
    // Liczba miejsc po przecinku
    decimalPlaces: 2,
    // Separator tysięcy
    thousandsSeparator: ' ',
    // Separator dziesiętny
    decimalSeparator: '.',
    // Minimalna wartość do wyświetlenia w formacie skróconym (K, M)
    shortFormatThreshold: 10000
  },

  // Ustawienia animacji
  animation: {
    // Czas animacji zmiany wartości (ms)
    countUpDuration: 2000,
    // Czy animować zmiany wartości
    enableCountUp: true,
    // Efekt pulsowania przy aktualizacji
    pulseOnUpdate: true
  }
};