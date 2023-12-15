/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#C70039",
        dark: "#2B2A4C",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
      dropShadow: {
        "3xl": "5px 2px 5px rgba(255,255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
