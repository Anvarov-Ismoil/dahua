/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-color": '#D7150E',
        "grey": "#6D6E71"
      }
    },
  },
  plugins: [],
}