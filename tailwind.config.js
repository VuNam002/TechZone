/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "ml-[-150px]",
  ],
  theme: {
    extend: {
      colors: {
        "my-red": "#FF0000",
      },
    },
  },
  plugins: [],
};
