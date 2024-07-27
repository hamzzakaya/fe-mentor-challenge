/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // Ensure this includes the path to your HTML files
  theme: {
    extend: {
      colors: {
        customPurple: "hsl(277, 64%, 61%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
