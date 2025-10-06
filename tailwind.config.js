/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { green: "#027B5B", yellow: "#F9DC1C", dark: "#0B1F1A", light: "#F6FFF9" }
      }
    }
  },
  plugins: []
};
