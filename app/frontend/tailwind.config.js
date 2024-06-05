/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-body': '#1E1E1E',
        'dark-container': '#2C2C2C',
        'accent': '#0C8CE9',
        'dark-input':'#222222',
        'dark-placeholder': 'B0B0B0',
        'selected': '#4A5878',
        'light-grey': '#444444',
        'active-grey': '#555555'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }

    },
  },
  plugins: [],
}

