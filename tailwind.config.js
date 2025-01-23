/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include your app's source files
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        covered: ['var(--font-covered-by-your-grace)', 'cursive'], 
      },
    }, // You can add custom theme extensions here
  },
  plugins: [],
};
