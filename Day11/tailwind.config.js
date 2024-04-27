/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "1.5/1":"1.5 / 1",
      },
    },
  },
  plugins: [],
};
