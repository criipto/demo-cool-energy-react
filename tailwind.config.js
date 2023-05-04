/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#EDEEFB',
      darkText: '#302935',
      primary: '#604FED', // dark purple
      secondary: '#F2F2F2', // bright purle
      dashboardCardUser: '#DAD7FD', // medium purple, data card background
      dashboardCardGeneric: '#DDDFF3',
      error: '#FEE4E2',
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/img/hero.png')",
        heroMobile: "url('../public/img/hero-mobile.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
    },
    screens: {
      tablet: '395px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
});
