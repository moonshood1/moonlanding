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
        flutter: "#29B6F6",
        symfony: "#000000",
        react: "#80D8F7",
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
