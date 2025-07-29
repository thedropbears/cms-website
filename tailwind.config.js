module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
    "./src/_includes/**/*.{html,njk}",
    "./src/_layouts/**/*.{html,njk}",
    "./src/_pages/**/*.{html,md}",
    "./src/_data/**/*.{js,json,yaml,yml}"
  ],
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
