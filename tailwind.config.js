/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        redish: {
          100: '#BB5E80',
          200: '#984B67'
        },
        darkerblue: '#192541',
        lighterblue: {
          100: '#587399',
          200: '#455c7c',
        },
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
