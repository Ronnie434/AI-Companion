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
        // Richer, modern color palette
        background: {
          light: "#ffffff",
          dark: "#0a0a0b", // Deep zinc/black
        },
        surface: {
          light: "#f4f4f5", // Zinc-100
          dark: "#18181b", // Zinc-900
        },
        primary: {
          DEFAULT: "#8b5cf6", // Violet-500
          foreground: "#ffffff",
          dark: "#7c3aed", // Violet-600
          light: "#a78bfa", // Violet-400
        },
        secondary: {
          DEFAULT: "#ec4899", // Pink-500
          foreground: "#ffffff",
          dark: "#db2777", // Pink-600
        },
        accent: {
          DEFAULT: "#06b6d4", // Cyan-500
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#71717a", // Zinc-500
          foreground: "#a1a1aa", // Zinc-400
        },
        border: {
          light: "#e4e4e7", // Zinc-200
          dark: "#27272a", // Zinc-800
        }
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.6)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom right, #0a0a0b, #18181b)',
        'primary-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}