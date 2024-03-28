/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'orange': '#e28625',
      'green': '#006971',
      'dark-green': '#004140',
      'offwhite': 'rba(255, 255, 0.75)',
      'white': '#fff',
      'offwhitebg': '#f2f'
    },
    fontFamily:{
      'shoulders': '"Big shoulders displays"',
      'lexend': '"Lexend Deca"'
    }
  },
  plugins: [],
}