/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(51,127,254)",  // Lighter shade of blue
          DEFAULT: "rgb(0,94,254)", // LG brand blue
          dark: "rgb(0,75,203)",    // Darker shade
        }
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}