module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        green: "#2f8033",
        background: "#05211e",
        backgroundSec:"#065c55",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
