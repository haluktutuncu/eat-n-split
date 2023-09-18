/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-lightest": "#fff4e6",
        "color-light": "#ffe8cc",
        "color-medium": "#ffa94d",
        "color-dark": "#ff922b",
      },
    },
  },
  plugins: [],
};
