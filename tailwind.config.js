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
      button: ["stratos", "sans-serif"],
    },
    colors: {
      title: "#272E5D",
    },
    extend: {},
  },
  plugins: [],
};
