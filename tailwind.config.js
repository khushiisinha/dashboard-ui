/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-e-500":"#85AFFF",
        "blue-e-700":"#4935FF",
        "blue-e-600":"#0800A3",
        "grey-e-600":"#A4A4A4",
        "grey-e-700":"#5A5A5A",
        "background-grey":"#FAFAFA"

      }
    },
  },
  plugins: [],
}

