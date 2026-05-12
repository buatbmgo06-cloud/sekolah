import type { Config } from "tailwindcss";

const config: Config = {
  // Aktifkan dark mode berbasis class (dikendalikan oleh ThemeProvider)
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Skema warna utama: Navy & Gold
        navy: {
          50:  "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3949ab",
          600: "#1a237e", // Navy utama
          700: "#162069",
          800: "#111854",
          900: "#0c1040",
        },
        gold: {
          50:  "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#f5c518", // Gold utama
          600: "#f9a825",
          700: "#f57f17",
          800: "#e65100",
          900: "#bf360c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
