import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"], // Keep class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Main page background
        foreground: "hsl(var(--foreground))", // Default text color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Accent color (e.g., purple from ref)
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Lighter gray for elements
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // For less prominent text
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Secondary accent (e.g., yellow from ref)
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background
          foreground: "hsl(var(--card-foreground))", // Text on cards
        },
        // Specific tag colors based on reference
        "tag-green-bg": "hsla(145, 60%, 40%, 0.15)", // Translucent green
        "tag-green-text": "hsl(145, 70%, 65%)", // Brighter green text
        "tag-red-bg": "hsla(0, 70%, 55%, 0.15)",
        "tag-red-text": "hsl(0, 80%, 75%)",
        "tag-yellow-bg": "hsla(45, 80%, 55%, 0.15)",
        "tag-yellow-text": "hsl(45, 90%, 70%)",
        "tag-purple-bg": "hsla(260, 70%, 60%, 0.15)",
        "tag-purple-text": "hsl(260, 80%, 75%)",
        "tag-gray-bg": "hsla(220, 10%, 40%, 0.2)",
        "tag-gray-text": "hsl(220, 10%, 75%)",
      },
      borderRadius: {
        lg: "1rem", // Main card radius
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        card: "0px 4px 16px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)", // Softer shadow for dark theme
        "inner-highlight": "inset 0 1px 0 0 hsla(0,0%,100%,0.05)", // Subtle top highlight for cards
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
