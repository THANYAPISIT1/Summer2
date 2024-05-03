/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
       colors: {
        'custom-blue': '#0085FF', 
        'custom-yellow': '#FFE455',
        'custom-silver': '#BAB4B4',
        'custom-platinum': '#34A0B4',
        'custom-diamond': '#D678FF',
      },
      borderRadius: {
        custom: '13px',
      },
    },
  },

  
  plugins: [
    require('preline/plugin'),
  ],
  variants: {
    extend:{
      display:["focus-group"]
    }
  }
}

