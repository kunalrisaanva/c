/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfiar:"'Playfair Display',serif",
        lato:"'Lato',sans-serif"
      }
    },
  },
  plugins: [],
}