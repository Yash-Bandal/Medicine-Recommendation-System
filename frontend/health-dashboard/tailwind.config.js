/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
          "./src/**/*.{js,ts,jsx,tsx}"], // This is important!
  theme: {
    extend: {
      colors: {
        coralStart: '#f77460',
        coralEnd: '#f16194',
      },
      fontFamily: {
        roboto: ['Roboto'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'Noto Sans',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      }
    },
  },
  darkMode: 'class',
  plugins: [],
  
};