/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "520px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel Decorative", "cursive"],
      },
    },
  },
  plugins: [],
};
