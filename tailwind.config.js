/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-1": "#25283d",
        "main-2": "#efd9ce",
        acc: "#A675A1",
      },
      screens: {
        sm: "500px",
        md: "768px",
        lg: "976px",
        lg2: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
