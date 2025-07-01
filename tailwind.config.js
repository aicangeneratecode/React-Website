/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF00",
        secondary: "#00FFFF",
        dark: "#111111",
        light: "#F5F5F5",
        darkGray: "#1A1A1A",
        // Цвета для навыков
        yellow: {
          400: "#facc15",
          600: "#ca8a04",
        },
        cyan: {
          400: "#22d3ee",
          600: "#0891b2",
        },
        sky: {
          400: "#38bdf8",
          600: "#0284c7",
        },
        green: {
          400: "#4ade80",
          600: "#16a34a",
        },
        orange: {
          400: "#fb923c",
          600: "#ea580c",
        },
        blue: {
          400: "#60a5fa",
          600: "#2563eb",
        },
        pink: {
          400: "#f472b6",
          600: "#db2777",
        },
        purple: {
          400: "#a78bfa",
          600: "#7c3aed",
        },
      },
      fontSize: {
        "code-lg": "1.1rem",
      },
      height: {
        "project-card": "700px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5)",
        "neon-sm":
          "0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5)",
        "neon-blue":
          "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)",
        "terminal-glow": "0 0 15px rgba(0, 255, 255, 0.3)",
      },
      animation: {
        "text-gradient": "text-gradient 3s ease infinite",
        typing: "typing 3s steps(20) infinite",
        "blink-caret": "blink-caret 0.75s step-end infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1s step-end infinite",
        "skill-progress": "skill-progress 1.5s ease-out forwards",
      },
      keyframes: {
        "text-gradient": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#00FF00" },
        },
        "skill-progress": {
          "0%": { width: "0%" },
          "100%": { width: "var(--skill-level)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 0, 0.05) 1px, transparent 1px)",
        "terminal-bg":
          "linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        ".terminal-scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#00FF00 transparent",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#00FF00",
            borderRadius: "3px",
          },
        },
        ".skill-card": {
          transition: "all 0.3s ease",
          "will-change": "transform, box-shadow",
        },
      });
    },
  ],
};
