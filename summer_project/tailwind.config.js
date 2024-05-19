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
        customGray: '#BAB4B4',
        customGray2: '#C5C5C5',
        customYellow: '#FFE455',
        customYellow2: '#FFD596',
        customYellow3: '#FFD39F',
        customPlatinum: '#34A0B4',
        customPlatinum2: '#52D6DE',
        customDiamond: '#BF00FF',
        customDiamond2: '#D678FF',
        customDiamond3: '#F1BAFF',
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

