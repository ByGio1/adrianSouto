module.exports = {
  content: [
    "./public/index.html",
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/7": "14.25%",
      },
      fontSize: {
        "10xl--footer": [
          "calc(5em + (48 - 24) * ((100vw - 300px) / (1800 - 300)))",
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
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
