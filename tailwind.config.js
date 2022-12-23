/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#23293F",
          50: "#C5CADF",
          100: "#AEB5D2",
          200: "#808CB8",
          300: "#56659B",
          400: "#3D476D",
          500: "#23293F",
          600: "#1E2335",
          700: "#181C2B",
          800: "#131621",
          900: "#0D0F18",
        },
      },
    },
  },
  plugins: [],
};
