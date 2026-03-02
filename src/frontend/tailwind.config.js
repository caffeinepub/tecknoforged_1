import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
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
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // Tecknoforged brand colors
        brand: {
          navy:    "oklch(var(--brand-navy))",
          blue:    "oklch(var(--brand-blue))",
          steel:   "oklch(var(--brand-steel))",
          light:   "oklch(var(--brand-light))",
          orange:  "oklch(var(--brand-orange))",
          "orange-dark": "oklch(var(--brand-orange-dark))",
          charcoal: "oklch(var(--brand-charcoal))",
          "dark-steel": "oklch(var(--brand-dark-steel))",
        },
      },
      fontFamily: {
        sans: ['"Mona Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Bricolage Grotesque"', '"Mona Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "var(--radius)",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        xs:     "0 1px 2px 0 rgba(10,22,40,0.05)",
        sm:     "0 2px 6px -1px rgba(10,22,40,0.08)",
        md:     "0 4px 16px -2px rgba(10,22,40,0.12)",
        lg:     "0 8px 30px -4px rgba(10,22,40,0.16)",
        xl:     "0 16px 50px -8px rgba(10,22,40,0.20)",
        orange: "0 4px 20px -2px rgba(232,114,12,0.40)",
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
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in-up":     "fade-in-up 0.6s ease-out",
        "fade-in":        "fade-in 0.4s ease-out",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
