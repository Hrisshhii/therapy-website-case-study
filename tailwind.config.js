/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223614",
        secondary: "#fbf7f2",
        muted: "#e9e4dc",
        accent: "#7b7a43",
        "accent-soft": "#c1beca",
      },
      fontFamily: {
        gopher: ["Gopher", "serif"],
      },
    },
  },
  plugins: [],
};
