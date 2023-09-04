/** @type {import('tailwindcss').Config} */

export default {
  plugins: [],
  content: [],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Work Sans']
      // }
    },
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], // to clean up unused CSS
  variants: {
    extend: {},
  },
  // darkMode: false, // or 'media' or 'class'
}