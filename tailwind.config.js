/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      colors: {
        whites: "#e4e4e4",
        lightWhite: "#f1f1f3",
        yellows: "#FFD369",
        darkYellows: "#cb9f39",
        browns: "#ba9a56",
        blacks: "#222831",
        lightGrey: "#cacbcb",
        darkGreys: "#393E46",
        greys: "#303030",
        reds: "#cb3d2d",
      },
    },
  },
  plugins: [],
};
