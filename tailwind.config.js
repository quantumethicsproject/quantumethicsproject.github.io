module.exports = {
  content: ["./**/*.html", "./**/*.md"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "brand-dark": "#507489",
        "brand-light": "#889ba4",
        "brand-grey": "#acacac",
        
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
