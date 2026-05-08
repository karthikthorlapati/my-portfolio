/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind to look for class names in your HTML and all React files
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // This is where you define your brand colors
      colors: {
        primary: "#0a192f",    // Deep Navy
        accent: "#64ffda",     // Teal/Cyan
        slate: "#8892b0",      // Grayish text
      },
    },
  },
  plugins: [],
}   