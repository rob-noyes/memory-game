module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        darkblue: '#314859',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
