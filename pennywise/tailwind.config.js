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
        text: "#000000",
      },
      fontFamily: {
        'pennywise': ['DM Sans', 'sans-serif'],
        'header': ['Outfit', 'sans-serif'],
        'content': ['Nunito', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%' : {opacity: '1'},
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeSlideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        slideUp: 'slideUp 1.5s ease-out',
        fadeSlideUp: 'fadeSlideUp 1.5s ease-out 2s forwards',
        spinCustom: 'spin 2.5s linear infinite',
        pingCustom: 'ping 2.5s linear infinite'
      },
      
      screens: {
        'custom_md': '850px',
        'custom_brp1': '1358px',
        'custom_brp2': '1134px',
        'custom_brp3': '941px',
        'custom_brp4': '789px',
        'custom_brp5': '558px',
      }
    },
  },
  plugins: [],
}

