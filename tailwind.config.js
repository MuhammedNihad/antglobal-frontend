/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf8f1",
          100: "#f5eedf",
          200: "#e8d5b5",
          300: "#ddc094",
          400: "#cf9f68",
          500: "#c5874a",
          600: "#b7733f",
          700: "#985c36",
          800: "#7b4b31",
          900: "#643e2a",
          950: "#351f15",
        },
        secondary: {
          50: "#f7f7fb",
          100: "#f1f1f6",
          200: "#e5e5ef",
          300: "#cfcfe3",
          400: "#b5b4d1",
          500: "#908cb8",
          600: "#837cab",
          700: "#716998",
          800: "#5f587f",
          900: "#4f4969",
          950: "#322f46",
        },

        accent: {
          50: "#ebf5ff",
          100: "#daedff",
          200: "#bcddff",
          300: "#94c3ff",
          400: "#6a9eff",
          500: "#4778ff",
          600: "#274fff",
          700: "#1c3fe6",
          800: "#1a38b9",
          900: "#1e3691",
          950: "#17276e",
        },
      },
    },
  },
  plugins: [],
  presets: [keepPreset],
};
