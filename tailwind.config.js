const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["html/*.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: { "scroll-behavior": "smooth" },
      });
    }),
    require("@tailwindcss/typography"),
    require("tailwindcss-scroll-snap"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: [
        "random-shapes",
        "church-on-sunday",
        "circuit-board",
        "plus",
        "i-like-food",
      ],
      colors: {
        default: "#BFBDBA",
      },
      opacity: {
        default: "0.025",
      },
    }),
  ],
};
