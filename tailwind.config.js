/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom color palette
        "primary": "#5FA5F9",
        "primary-content": "#ffffff",
        "background-light": "#f8fafc",
        "background-dark": "#0B0E11",
        "surface": "#15191E",
        "surface-highlight": "#1E242C",
        "text-main": "#F1F5F9",
        "text-muted": "#94A3B8",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "lg": "0.6rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
}