/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6",
        // Light Mode
        dominant: "#0f172a",
        compliment: "#1e293b",
        primary: "#f1f5f9",
        secondary: "#fff",
        tirtiary: "#e2e8f0",
        // Dark Mode
        "dark-dominant": "#F0F3FA",
        "dark-compliment": "#D6DEEA",
        "dark-primary": "#080E21",
        "dark-secondary": "#0C1531",
        "dark-tirtiary": "#142252",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
