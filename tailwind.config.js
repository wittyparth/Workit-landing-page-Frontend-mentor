/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_purple: "#24053e",
        neon_green: "#44ffa1",
        dark_gray: "#584d62",
        dark_white: "#fcf8ff",
        white: "#ffffff",
      },
    },
    fontFamily: {
      fraunces: ["Fraunces", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
