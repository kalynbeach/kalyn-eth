/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'night': {
        700: '#11141A',
        800: '#141414',
        900: '#0F0D0C'
      },
    },
    extend: {},
  },
  plugins: [],
}
