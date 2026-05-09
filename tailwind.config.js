/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#21454E',
          teal: '#2A767E',
          mist: '#F5F7F8',
          line: '#DDE8EA',
          text: '#2C3E50',
          muted: '#6F7F82',
          coral: '#D95D4F',
          gold: '#C39A45',
          blue: '#2F6F9F',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(33, 69, 78, 0.14)',
        line: '0 0 0 1px rgba(33, 69, 78, 0.08)',
      },
    },
  },
  plugins: [],
}
