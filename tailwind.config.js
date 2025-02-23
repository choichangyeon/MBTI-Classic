/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        sm: "45px",
        md: "70px",
        lg: "100px",
        xl: "180px",
      },
      width: {
        sm: "60px",
        md: "90px",
        lg: "150px",
        xl: "250px",
      },
    },
  },
  plugins: [],
};
