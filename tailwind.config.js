/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      base: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#1366D9',
        secondary: '#EB0A19',
      },
      coolgray: {
        100: '#F5F5F5',
        200: '#EBEBEB',
        300: '#E0E0E0',
        400: '#CCCCCC',
        500: '#8F8F8F',
        600: '#7A7A7A',
        700: '#525252',
        800: '#292929',
      },
      blue: {
        100: '#EBF3FF',
        200: '#D6E7FF',
        300: '#C2DAFF',
        400: '#99C2FF',
        500: '#70A9FF',
        600: '#2159AB',
        700: '#1B4789',
        800: '#143566',
      },
      green: {
        100: '#D0F6CA',
        200: '#54E03E',
        300: '#3AD322',
        400: '#30AF1D',
        500: '#1D6911',
      },
      yellow: {
        100: '#FEFCE8',
        200: '#FEF9C3',
        300: '#FEF08A',
        400: '#FDE047',
        500: '#FACC15',
        600: '#EAB308',
        700: '#CA8A04',
        800: '#A16207',
        900: '#854D0E',
      },
      red: {
        100: '#FFF6F7',
        200: '#FDC4C8',
        300: '#F62735',
        400: '#EB0A19',
      },
      greyText: "#667085",
      ashGray: "#F0F1F3",
      button: "#1366D9",
      greyBG: "#F0F1F3",
      greyish: "#858D9D",
      
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
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];