/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        brown: '#716056',
        orange: '#D49635',
        beige: '#F4F2F2',
      }
    },
  },
  plugins: [],
}
