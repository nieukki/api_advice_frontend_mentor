/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: "0 0 30px 0 hsl(150, 100%, 66%)",
      },
      colors: {
        primaryLightCyan: "hsl(193, 38%, 86%)",
        primaryNeonGreen: "hsl(150, 100%, 66%)",
        neutralGreyishBlue: "hsl(217, 19%, 38%)",
        neutralDarkGreyishBlue: "hsl(217, 19%, 24%)",
        neutralDarkBlue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        family1: "Manrope, sans-serif;",
      },
      screens: {
        lg: "1440px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
