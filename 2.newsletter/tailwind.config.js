/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "newsletter.html"],
  prefix: "boms12_171222-newsletter-",
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
