const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif", ...defaultTheme.fontFamily.sans],
      serif: ["Faustina", "serif", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      sm: ["0.875rem", { lineHeight: "2" }], // 14px - 28px
      base: ["1.375rem", { lineHeight: "1.5" }], // 22px - 33px
      lg: ["2rem", { lineHeight: "1.5" }], // 32px - 48px
      xl: ["4rem", { lineHeight: "1" }],
      xxl: ["5rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        primary: "#F19D8C",
        secondary: "#3C579F",
        "gradien-start": "#FEF6F4",
        "gradien-end": "#FCE6DD",
      },
      fontSize: {
        "label-sm": [
          "0.875rem",
          { lineHeight: "1.21", letterSpacing: "0.3em" },
        ], // 14px - 17px
        "label-md": [
          "0.875rem",
          { lineHeight: "1.21", letterSpacing: "0.3em" },
        ], // 14px - 17px
        "label-lg": ["1.125rem", { lineHeight: "1.2", letterSpacing: "0.3em" }], // 18px - 22px
        h5: ["2.5rem", { lineHeight: "1.2", letterSpacing: "0.3em" }], // 40px - 48px
        h4: ["2.875rem", { lineHeight: "1.21" }], // 46px - 56px
        h3: ["3.5rem", { lineHeight: "1.21" }], // 56px - 68px
        h2: ["7.75rem", { lineHeight: "1.22" }], // 124px - 152px
        h1: ["9rem", { lineHeight: "1" }], // 114px - 114px,
      },
      textUnderlineOffset: {
        10: "10px",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
