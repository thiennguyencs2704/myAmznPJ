const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        semism: "480px",
        ...defaultTheme.screens,
      },
      boxShadow: {
        blue: "0 2px 2px 0 rgba(19, 51, 81, 0.39)",
        gray: "0 1px 0 0 rgba(255, 255, 255, 0.6)",
      },
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        amazon_button: {
          light: "#f7dfa5",
          DEFAULT: "#f0c14b",
        },
        amazon_gray: {
          light: "rgb(231, 233, 236)",
          DEFAULT: "adb1b8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
  // important: true,
};
