import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#216869",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#071817",
          foreground: "hsl(var(--secondary-foreground))",
        },
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8887",
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
          foreground: "hsl(var(--white-foreground))",
        },
      },
      fontFamily: {
        "dm-sans": ["var( --font-dm-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "100": "2px 2px 0px 0px rgb(0, 0, 0)",
        "200": "2px 2px 0px 2px rgb(0, 0, 0)",
        "300": "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;
