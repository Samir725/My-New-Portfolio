/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out forwards',
      },
      colors: {
        'custom-button': '#003049',
        'custom-green': '#10b981',
        'custom-red': '#ef4444',
        'custom-yellow': '#fbbf24',
      },
    },
  },
  plugins: [],
}

