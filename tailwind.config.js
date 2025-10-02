const nativewind = require('nativewind/tailwind/css');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347',
        secondary: '#444262',
        tertiary: '#FF7754',
        gray: '#83829A',
        gray2: '#C1C0C8',
        lightWhite: '#FAFAFC',
        black: '#000000',
      },
    },
  },
  plugins: [],
}

