/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        // New custom colors
        base: {
          black: "#0A0A0A",
        },
        brand: {
          purple: "#6C2BD9",
          blue: "#3A86FF",
          pink: "#FF3CAC",
          cyan: "#00F5FF",
          indigo: "#1A1A2E",
          lime: "#00FF9C",
        },
        frost: {
          DEFAULT: "rgba(255,255,255,0.1)",
          dark: "rgba(255,255,255,0.05)",
          light: "rgba(255,255,255,0.2)",
        },
        glass: {
          purple: "rgba(108, 43, 217, 0.2)",
          blue: "rgba(58, 134, 255, 0.2)",
          dark: "rgba(10, 10, 10, 0.7)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      backgroundImage: {
        "gradient-purple-blue": "linear-gradient(135deg, #6C2BD9, #3A86FF)",
        "gradient-purple-pink": "linear-gradient(135deg, #6C2BD9, #FF3CAC)",
        "gradient-blue-cyan": "linear-gradient(135deg, #3A86FF, #00F5FF)",
        "gradient-indigo-purple": "linear-gradient(135deg, #1A1A2E, #6C2BD9)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
