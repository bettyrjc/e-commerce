module.exports = {
  purge: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      success: "#44d64b",
      gray: {
        100: "#fafafa",
        200: "#f4f4f4",
        300: "#e6ebf1",
        400: "#eaeaea",
        500: "#cccccc",
        600: "#9aabb5",
        700: "#999999",
        800: "#43484d",
        900: "#3c3c3c",
      },
      blue: {
        100: "#fff8f9",
        200: "#5089C6", // Light button
        500: "#035397",
        700: "#001E6C", // gradient
      },
      purple: {
        100: "#f1e8ff", // Light button
        500: "#200844",
      },
      red: {
        500: "#e32726",
      },
      yellow: {
        100: "#fffff0",
        200: "#fefcbf",
        500: "#FFAA4C",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
