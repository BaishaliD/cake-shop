/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary1: "#F0DBDB",
        primary1: "#0b1703",
        // primary2: "#DBA39A",
        primary2: "#214b21",
        secondary1: "#FEFCF3",
        secondary2: "#F5EBE0",
        accent1: "#815B5B",
        accent2: "#594040",
      },
      height: {
        "70v": "70vh",
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, #0b1703 50%, #214b21)",
      },
    },
  },
  plugins: [],
};
