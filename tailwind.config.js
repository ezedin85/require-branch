/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my_navy': '#1f1f38',
        'my_aqua': '#4db5ff',
        'my_dark_blue': '#2a2758'
      },
      fontFamily: {
        poppins: [
          "'Poppins', sans-serif",
        ]
      }
    },
  },
  plugins: [],
}
