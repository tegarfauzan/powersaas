/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom-company-carousel': 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 47.08%, #FFFFFF 100%)',
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
}

