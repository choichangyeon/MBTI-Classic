/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        sm: "45px",
        md: "70px",
        lg: "100px",
      },
    },
  },
  plugins: [],
};
