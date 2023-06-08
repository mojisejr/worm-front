/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobileS: "375px",
      tabletS: "768px",
      tabletM: "1024px",
      labtop: "1440px",
      desktop: "1920px",
      desktopM: "2330px",
    },
    colors: {
      white: "#ffffee",
      dark: "#201D1E",
      lightgreen: "#9BD6CD",
      purple: "#8767ad",
      yellow: "#fcdb5d",
      red: "#ed8079",
      pale: "#ffeee2",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
