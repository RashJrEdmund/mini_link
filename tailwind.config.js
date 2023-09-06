/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
  content: [],
  theme: {
    extend: {
      spacing: {
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        res_width: "min(97vw, 1224px)"
      },
      fontSize: {
        small: "1rem",
        medium: "2rem",
        big: "3rem"
      },
    },
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], // to clean up unused CSS
  variants: {
    extend: {},
  },
  // darkMode: false, // or 'media' or 'class'
}