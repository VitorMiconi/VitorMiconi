/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        minhaFonte: ['AKZI', 'sans-serif'],
      },
      colors: {
        laranja: '#ff7110',
        azul: '#0066cc',
        verde: '#00a204',
        cinza: '#7c7b7b',
        cinzaclaro: '#f4f5f8',
      },
    },
  },
  plugins: [],
}

