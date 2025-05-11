module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#003569",
        accent: "#FDB916",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
