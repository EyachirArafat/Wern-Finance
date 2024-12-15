/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#772AB3",
        bSecondary: "#3D3D543D",
        bAccent: "#3D3F54",
      },
      fontFamily: {
        mplus: ['"M PLUS 1"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #772AB3 0%, #C753FE 100%)"
      },
    },
  },
  plugins: [],
}

/**
 
background: ;

 */