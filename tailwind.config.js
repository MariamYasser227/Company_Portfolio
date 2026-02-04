const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["'DIN Next LT Arabic'", "sans-serif"],
      },
      keyframes: {
        lightOnOff: {
          "0%, 100%": { boxShadow: "0 0 0 0px #1a8650" },
          "50%": { boxShadow: "0 0 0 6px rgba(26, 134, 80, 0.3)" },
        },
      },
      animation: {
        lightOnOff: "lightOnOff 1.5s infinite",
      },
    },
  },
  plugins: [],
});
