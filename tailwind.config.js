/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        section: "var(--section-background)",
        primary: "var(--primary-color)",
      },
      textColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      borderColor: {
        primary: "var(--border-color)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
