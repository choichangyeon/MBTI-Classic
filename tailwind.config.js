/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        sm: "25px",
        md: "50px",
        lg: "100px",
      },
    },
  },
  plugins: [],
};
