/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridColumn: {
        "2/-1": " 2 / -1",
      },
      gridTemplateColumns: {
        "2/1": "2fr 1fr",
        "1/8": "1fr 8fr",
      },
      width: {
        "2/15": "13.33333%",
      },
      zIndex: {
        60: 60,
      },
      borderRadius: {
        "1/2": "50%",
      },
      listStyleType: {
        "- ": `"- "`,
      },
    },
  },
  plugins: [],
};
