/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6",
        dominant: "#0F172A",
        compliment: "#1E293B",
        primary: "#F1F5F9",
        secondary: "#FFF",
        tirtiary: "#E2E8F0",
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
