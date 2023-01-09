/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary1: "#F0DBDB",
        primary2: "#DBA39A",
        secondary1: "#FEFCF3",
        secondary2: "#F5EBE0",
        accent1: "#815B5B",
        accent2: "#251a1a",
        "accent2-50": "#241919a8",
        reviewCard: "#5940404f",
        black50: "#00000080",
        white20: "#ffffff33",
        white50: "#ffffff80",
      },
      backgroundImage: {
        nav: "linear-gradient(to right, #F0DBDB, #DBA39A)",
        hero: "linear-gradient(to right, #F0DBDB, #DBA39A)",
        waves: "url('assets/waves_c.png')",
      },
    },
  },
  plugins: [],
};

//sm : 640
//md : 768
//lg : 1024
//xl : 1280
//2xl : 1536
