/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[".src/**/*.js, .js/**/*.js"],
  content: [  './src/**/*.{html,js}',
  './js/**/*.{html,js}',
  './index.html'
],
  theme: {
    extend: {
    
      fontFamily: {
          'Montserrat': ['Montserrat', 'sans-serif']
    },
    keyframes: {
      'abrir-menu':{
        '0%': { transform: 'scaley(0)' },
        '80%': { transform: 'scaley(1.2)' },
        '100%': { transform: 'scaley(1)' },
      },
    },
    animation:{
      'abrir-menu': 'open-menu 0.5s ease-in-out forwards',
    },
  },
  plugins: [],
}
}