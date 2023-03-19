/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#EDEEFB',
      darkText: '#302935',
      primary: '#604FED', // dark purple
      secondary: '#F2F2F2', // brigh purle
      dashboardCardUser: '#DAD7FD', // medium purple, data card background
      dashboardCardGeneric: '#DDDFF3',
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
      padding: {
        '12px': '12px',
        '26px': '26px',
        '20px': '20px',
        '30px': '30px',
        '32px': '32px',
        '34px': '34px',
        '40px': '40px',
        '64px': '64px',
        '96px': '96px',
      },
      margin: {
        '12px': '12px',
        '20px': '20px',
        '24px': '24px',
        '26px': '26px',
        '32px': '32px',
        '34px': '34px',
        '40px': '40px', // user
      },
      height: {
        '32px': '32px', // logout button height (with margin extracted)
        '40px': '40px',
        '44px': '44px', // logout button height
        '72px': '72px', // header height
        '80px': '80px', // header height for large screens
        '232px': '232px',
        '231px': '240px',
        '486px': '486px',
      },
      width: {
        '150px': '150px',
        '220px': '220px',
      },
      leading: {
        '44px': '44px',
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
