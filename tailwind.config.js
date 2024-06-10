/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./portfolio/*.html"],
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
      fontFamily: {
        tesFont: ["Pacifico", "cursive"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 35s linear infinite",
        "infinite-scroll-paused":
          "infinite-scroll-paused 10s linear infinite paused",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "infinite-scroll-paused": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
