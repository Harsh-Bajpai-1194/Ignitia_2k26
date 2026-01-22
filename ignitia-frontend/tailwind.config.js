/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'], 
        tech: ['"Rajdhani"', 'sans-serif'],
      },
      colors: {
        'neon-gold': '#FFD700', 
        'neon-red': '#FF0033',
        'deep-black': '#050505',
      },
    },
  },
  plugins: [],
}