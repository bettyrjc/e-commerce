module.exports = {
  purge: ['./index.html', './src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
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
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "28": "8rem",
      "30": "10rem",
      "32": "12rem",
      "34": "14rem",
      "35": "20rem",
      "36": "30rem",
      "95/100": "92%",
      "68p": "68%",
      "40p": "30%",
      full: "100%",
      semiFull: "98%",
      screen: "100vh",
    }),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "28": "8rem",
      "30": "10rem",
      "32": "12rem",
      "34": "14rem",
      "36": "30rem",
      "95/100": "92%",
      "68p": "68%",
      "40p": "30%",
      full: "100%",
      semiFull: "98%",
      screen: "100vh",
    }),
    fontSize: {
      small: "0.6em",
      btn: "0.8rem",
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
