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
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        240: '240%', //showing left side of the image
        260: '260%', //for large screens
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
});
