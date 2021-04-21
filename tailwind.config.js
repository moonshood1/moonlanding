module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        berry: "#A10115",
        cherry: "#D72C16",
        chiffon: "#F0EFEA",
        smoke: "#C0B2B5",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
