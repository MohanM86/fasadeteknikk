import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Outfit'", "system-ui", "sans-serif"],
        sans: ["'Outfit'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-xl": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "800" }],
        "display-lg": ["clamp(1.875rem, 3.5vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "heading-xl": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" }],
        "heading-lg": ["clamp(1.25rem, 2vw, 1.625rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "heading-md": ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "700" }],
        "heading-sm": ["1.0625rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        label: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "600" }],
        caption: ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
        "cta-md": ["0.9375rem", { lineHeight: "1.2", fontWeight: "600" }],
        "service-title": ["clamp(1.75rem, 3.5vw, 2.625rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
      },
      colors: {
        brand: { 50: "#FFF7F0", 100: "#FFEAD6", 200: "#FFD5A8", 300: "#FFB970", 400: "#FF9A3D", 500: "#FF6B00", 600: "#E05E00", 700: "#B84D00", 800: "#933E00", 900: "#7A3400" },
        neutral: { 50: "#FAFAFA", 100: "#F5F5F5", 200: "#EFEFEF", 300: "#E5E5E5", 400: "#CCCCCC", 500: "#999999", 600: "#777777", 700: "#555555", 800: "#333333", 900: "#1A1A1A", 950: "#111111" },
      },
      maxWidth: { site: "1280px", content: "740px" },
      boxShadow: { "card": "0 4px 24px -4px rgba(0,0,0,0.06)", "card-lg": "0 20px 60px -12px rgba(0,0,0,0.08)", "cta": "0 12px 36px -6px rgba(255,107,0,0.4)", "cta-hover": "0 16px 44px -6px rgba(255,107,0,0.5)" },
      borderRadius: { "4": "4px", "6": "6px", "8": "8px", "10": "10px", "12": "12px", "14": "14px", "16": "16px", "20": "20px", "24": "24px", "28": "28px" },
      keyframes: { "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }, "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } } },
      animation: { "fade-up": "fade-up 0.6s ease-out both", "fade-in": "fade-in 0.4s ease-out both" },
    },
  },
  plugins: [],
};

export default config;
