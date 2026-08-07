/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#010124',
          900: '#030338',
          800: '#07074d',
        },
        cyan: {
          400: '#00F2FE',
          500: '#00D8E4',
          600: '#00B4D8',
        },
        amber: {
          400: '#FFB703',
          500: '#FF9F00',
          600: '#D97706',
        },
        violet: {
          500: '#7B2CBF',
          600: '#6415A3',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
