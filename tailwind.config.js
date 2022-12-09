/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#acacac',
      },
    },
    container: {
      padding: {
        md: '8rem',
        sm: '4rem',
      }
    },
  },
  plugins: [],
}
