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
      backgroundImage: {
        closeBtn: "linear-gradient(to left, white 50%, red 50%)",
        checkoutBtn: "linear-gradient(to left, white 50%, #23c920 50%)",
        addButton: "linear-gradient(to left, black 50%, #d19b75 50%)",
      },
    },
  },
  plugins: [],
};
