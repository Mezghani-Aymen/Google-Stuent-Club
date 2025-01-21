/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        autoRun: "autoRun 2s linear infinite",
      },
      keyframes: {
        autoRun: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        'custom-red': {
          DEFAULT: '#DB4437',
        },
        'custom-green': {
          DEFAULT: '#0F9D58',
        },
        'custom-blue': {
          DEFAULT: '#4285F4',
        },
        'custom-yellow': {
          DEFAULT: '#F4B400',
        },
      },
    },
  },
  plugins: [],
};
