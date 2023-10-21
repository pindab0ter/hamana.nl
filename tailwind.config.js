const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brown: '#716056',
        orange: '#D49635',
        beige: '#F4F2F2',
      },
      fontFamily: {
        'heading': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
}
