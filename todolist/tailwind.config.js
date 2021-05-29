module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "s": "480px",
      },
      minWidth: {
        "0": "0",
        "5": "1.25rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minHeight:{
        "5": "1.25rem",
        "10": "2.5rem",
        "12": "3rem",
        "15": "3.75rem",
        "96": "24rem",
        "112": "28rem"
      },
      colors: {
        black: {
          grey: "#2B2B2B",
          light: "#121212",
        },
        purple: {
          light: "#9E64F4",
          bright: "#711BF2",
          dark: "#5915BF",
          verydark: "#350D73",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
