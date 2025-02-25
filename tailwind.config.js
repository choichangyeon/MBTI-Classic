/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        xs: "30px",
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-base": {
          "@apply transition duration-300 rounded-md hover:text-white hover:border-indigo-300 hover:bg-indigo-300":
            {},
        },
        ".col-base": {
          "@apply flex flex-col": {},
        },
        ".row-base": {
          "@apply flex flex-row": {},
        },
        ".center-base": {
          "@apply justify-center items-center": {},
        },
      });
    },
  ],
};
