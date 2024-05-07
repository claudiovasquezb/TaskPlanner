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
        'selected': '#4A5878'
      },
      borderRadius: {
        DEFAULT: '0,625rem'
      },
      width: {
        'custom-login': '46rem'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'custom': '1fr minmax(0, 736px) 1fr',
      }
    },
  },
  plugins: [],
}

