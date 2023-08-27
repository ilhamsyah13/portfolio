/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 70px -10px rgba(0, 0, 0, 0.30)",
      },
      colors: {
        white: "#f8f8f8",
        black: "#212121",
      },
    },
  },
  plugins: [],
};
