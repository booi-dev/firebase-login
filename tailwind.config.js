/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-1': '#25283d',
        'main-2': '#efd9ce',
      }
    },
  },
  plugins: [],
}

