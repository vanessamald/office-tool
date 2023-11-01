/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5b21b6',
        'blueish': '#4c51b9',
        'dark-pink': '#cb4d89',
        'light-pink': '#cd85b3',
        'white': '#FFFFFF',
        'black': '#000000',
        //'gray': '#374151',
        'red': '#FF0000',
        'red-med': '#CC3333',
        'red-light': '#FEE2E2',
        'green': '#00FF00',
        
      },
    },
  },
  plugins: [],
}
