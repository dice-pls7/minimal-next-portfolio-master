const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      fontSize: {
        // Awwwards-style large typography
        "display-xl": ["clamp(4rem, 15vw, 15rem)", { lineHeight: "0.85", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 12vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display": ["clamp(2.5rem, 10vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "headline": ["clamp(2rem, 6vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "title": ["clamp(1.5rem, 4vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Awwwards-style keyframes
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: 0, transform: "translateY(-30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "slide-in-left": {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: 0, transform: "translateX(100px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "blur-in": {
          from: { opacity: 0, filter: "blur(10px)" },
          to: { opacity: 1, filter: "blur(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Awwwards-style animations
        "fade-in": "fade-in 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "fade-down": "fade-down 0.8s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "blur-in": "blur-in 0.8s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.6, 0.01, 0.05, 0.95)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "dark",
    "retro",
    "cyberpunk",
    "paper",
    "aurora",
    "synthwave",
    {
      pattern:
        /^(.*?)(dark|retro|cyberpunk|paper|aurora|synthwave)([:.])(.*?)$/,
    },
  ],
};
