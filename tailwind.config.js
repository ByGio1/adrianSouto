module.exports = {
  content: [
    "./public/index.html",
    "./public/**/*.{html,js}",
    "./personal/**/*.{html,js}",
    "./professional/**/*.{html,js}",
    "./about/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/7": "14.25%",
      },
      fontSize: {
        "10xl--footer": [
          "clamp(3rem, 1.236rem + 9.076vw, 5rem)",
          {
            lineHeight: ".8em",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          },
        ],
        "10xl": [
          "12vw",
          {
            lineHeight: "0.6em",
            letterSpacing: "-0.05em",
            fontWeight: "400",
          },
        ],
      },
    },
    fontFamily: {
      sans: ['"Helvetica Neue"', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
