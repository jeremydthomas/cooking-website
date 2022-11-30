/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "869px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      FontFace: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      maxHeight: {
        "68p": "800px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
