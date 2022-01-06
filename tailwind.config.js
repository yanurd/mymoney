const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    colors: {
      ...colors,
      'main': '#302138',
      'secondary': '#422D4D',
      'main-button': '#5E00D4',
      'white': '#E5E5E5'
    },
    extend: {},
  },
  plugins: [],
}
