/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      cardColor: "#080808",
      lyricsColor: "#1e293b",
    },
    extend: {},
  },
  plugins: [daisyui, require("flowbite/plugin")],
};
