/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      body: ["R-Flex", "sans-serif"],
      title: ["Morganite", "sans-serif"],
      cursive: ["Autumn in November", "cursive"],
    },
    colors: {
      title: "#272E5D",
      primary: "#6D44FF",
    },
    extend: {
      opacity: {
        16: ".16",
      },
      backgroundImage: {
        "card-hover": "linear-gradient(#EFEBFF, #EFEBFF)",
      },
    },
  },
  plugins: [],
};
