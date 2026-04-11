/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ ye hona hi chahiye
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};