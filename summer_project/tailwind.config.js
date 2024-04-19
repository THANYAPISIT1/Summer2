/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
       colors: {
        'custom-blue': '#0085FF', 
        'custom-yellow': '#FFE455',
      },
      borderRadius: {
        custom: '13px',
      },
    },
  },
  plugins: [],
  variants: {
    extend:{
      display:["focus-group"]
    }
  }
}

