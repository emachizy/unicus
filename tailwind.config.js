/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scrolling: "scrolling 30s linear infinite", // Define the animation
      },
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(100%)" }, // Start off the screen to the right
          "100%": { transform: "translateX(-100%)" }, // End off the screen to the left
        },
      },
    },
  },
  plugins: [],
});
