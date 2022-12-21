/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Futura', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in': {
          '0%': {
            'opacity': 0,
            'transform': 'scale(1.1)',
          },
          '100%': { 'opacity': 1 },
        }
      },
    },
  },
  plugins: [],
}
