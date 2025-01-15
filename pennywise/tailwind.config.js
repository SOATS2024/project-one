/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d8351",
        secondary: "#059669", 
        background: "#ecfdf5",
        hover_secondary: "#036345",
        // primary: "#9c013a",
        // secondary: "#cb014b",
        // background: "#ffe6ef",
        // hover_secondary: "#980138",
        text: "#1f2937",
      },
      fontFamily: {
        'pennywise': ['DistilleryScript']
      }
    },
  },
  plugins: [],
}

