/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    'node_modules/preline/dist/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-silver': '#BAB4B4',
        'custom-yellow': '#FFE455',
        'custom-platinum': '#34A0B4',
        'custom-diamond': '#D678FF',
      },
    },
  },

  
  plugins: [
    require('preline/plugin'),
    nextui()
  ],
  variants: {
    extend:{
      display:["focus-group"]
    }
  }
}

