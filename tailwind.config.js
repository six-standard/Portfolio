/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".H1": { fontSize: "30px", fontWeight: "900", "@media print": { fontSize: "32px" } },
        ".H2": {
          fontSize: "20px",
          fontWeight: "700",
          leading: 1,
          "@media print": { fontSize: "23px" },
        },
        ".H3": {
          fontSize: "18px",
          fontWeight: "600",
          leading: 1,
          "@media print": { fontSize: "21px" },
        },
        ".SPAN": {
          fontSize: "16px",
          "@media print": { fontSize: "19px" },
        },
      });
    },
  ],
};
