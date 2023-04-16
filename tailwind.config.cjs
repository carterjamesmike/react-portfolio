/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    backgroundImage: {
      'primary': "url('./src/assets/images/primary.png')",
    },
  },
  plugins: [],
}
