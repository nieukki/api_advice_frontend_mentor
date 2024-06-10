/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenLighter: "hsl(148, 38%, 91%)",
        greenMedium: "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 54%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        greyMedium: "hsl(186, 15%, 59%)",
        greyDarker: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        family1: "Karla, sans-serif;",
      },
      screens: {
        lg: "1440px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
