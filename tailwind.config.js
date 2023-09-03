/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
      fontFamily: {
        poppins: ["Poppins"],
        mono: ["Roboto Mono"],
        hand: ["Fasthand"],
        julee: ["julee"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
