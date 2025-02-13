/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        as:'425px',
        bs:'1024px',
      }
    },
  },
  plugins: [],
}

