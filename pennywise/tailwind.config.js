/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Default Blue (Changeable)
        secondary: "#9333ea", // Purple (Changeable)
        background: "#f3f4f6", // Light Gray (Changeable)
        text: "#1f2937",
      },
      fontFamily: {
        'pennywise': ['DistilleryScript']
      }
    },
  },
  plugins: [],
}

