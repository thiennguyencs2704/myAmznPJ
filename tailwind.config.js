const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "1/8": "12.5%",
        "1/10": "10%",
      },
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
          light: "#e7eaf0",
          DEFAULT: "#d9dce1",
        },
        amazon_blue_banner: {
          light: "#0A99AF",
          DEFAULT: "#057586",
        },
        amazon_orange: {
          light: "rgb(231, 118, 0)",
          DEFAULT: "rgb(196, 85, 0)",
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
