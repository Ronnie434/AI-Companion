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
        "primary-dark": "#4A8FE7",
        "primary-content": "#ffffff",
        "background-light": "#ffffff",
        "background-dark": "#0B0E11",
        "surface": "#15191E",
        "surface-light": "#f8fafc",
        "surface-highlight": "#1E242C",
        "surface-highlight-light": "#e2e8f0",
        "text-main": "#F1F5F9",
        "text-main-light": "#1e293b",
        "text-muted": "#94A3B8",
        "text-muted-light": "#64748b",
        "border-light": "#e2e8f0",
        "border-dark": "#1e293b",
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