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
        700: 'hsl(220, 21%, 8%)', // '#11141A'
        800: 'hsl(0, 0%, 8%)', // '#141414'
        900: 'hsl(20, 11%, 5%)' // '#0F0D0C'
      },
    },
    extend: {},
  },
  plugins: [],
}
