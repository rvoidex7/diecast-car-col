/** @type {import('tailwindcss').Config} */
const { COLORS } = require('./constants/theme');

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS,
        black: '#000000',
      },
    },
  },
  plugins: [], // This should be empty for NativeWind v4 with the Babel plugin
};