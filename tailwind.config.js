/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#16142B',
        'primary': {
          500: '#4785FF',
          600: '#1967FF'
        },
        neutral: {
          500: '667085',
          700: '#344054',
          800: '#1D2939',
          900: '#101828'
        }
      },
      fontSize: {
        'button': ['14px', '17.5px'],
        'filter-title': ['18px', '22.5px'],
      }
    },
    boxShadow: {
      'filterBox': '0 4 54 10 rgba(0, 0, 0, 0.35)'
    }
  },
  plugins: [],
}

