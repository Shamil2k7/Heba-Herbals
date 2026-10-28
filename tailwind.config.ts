import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F4EC",
          50: "#FCFAF6",
          100: "#F7F4EC",
          200: "#EFEADA",
        },
        cream: {
          DEFAULT: "#EDE5D6",
          50: "#FAF7F2",
          100: "#F5EFE6",
          200: "#EDE5D6",
          300: "#E0D5C1",
          400: "#CFC1A6",
        },
        olive: {
          DEFAULT: "#646B48",
          light: "#7B835B",
          dark: "#4E5437",
          50: "#F5F6F0",
          100: "#E4E6D8",
        },
        forest: {
          DEFAULT: "#283321",
          light: "#394630",
          dark: "#1A2216",
        },
        "warm-brown": {
          DEFAULT: "#8A6347",
          light: "#A17657",
          dark: "#6F4E36",
          50: "#FBF7F4",
        },
        charcoal: {
          DEFAULT: "#262820",
          muted: "#4A4D3E",
          light: "#666B58",
        },
        berry: {
          DEFAULT: "#6A1C2C",
          deep: "#4D131F",
          tint: "#852639",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        ultra: "0.3em",
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(40, 51, 33, 0.05)",
        card: "0 4px 20px -2px rgba(40, 51, 33, 0.07)",
        float: "0 12px 30px -4px rgba(40, 51, 33, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
