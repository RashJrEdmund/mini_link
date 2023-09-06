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
        app_width_limit: "min(97vw, 1400px)",
        res_width: "min(97vw, 1224px)"
      },
      fontSize: {
        small: "1rem",
        medium: "2rem",
        large: "3rem"
      },
      colors: {
        lite_gray: "#c9ced6",
        disable_btn: "#16347d",
        app_border: "#c9ced6",
        lite_blue: "#1d9bf0",
        main_blue: "#144ee3",
        main_pink: "#e95690",
        item_border: "#c9ced6",
        bg_gray: "#181e29",
      }
    },
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], // to clean up unused CSS
  variants: {
    extend: {},
  },
  // darkMode: false, // or 'media' or 'class'
}