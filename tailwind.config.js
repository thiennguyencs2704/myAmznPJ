module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blue: "0 2px 2px 0 rgba(19, 51, 81, 0.39)",
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
          light: "#e7e9ec",
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
