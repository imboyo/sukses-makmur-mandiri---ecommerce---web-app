/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D1FF",
          300: "#E9D7FE",
          400: "#D9B9FF",
          500: "#B692F6",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027948",
          800: "#05603a",
          900: "#054f31",
        }
      },
      boxShadow: {
        "xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "sm": "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        "md": "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        "lg": "0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.10)",
        "xl": "0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.10)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.20)",
        "focus-ring-primary": "0px 0px 0px 4px #F4EBFF"
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.99em",
          lineHeight: "90px",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.075em",
          lineHeight: "72px",
        },
      ],
      "display-lg": {
        fontSize: "48px",
        letterSpacing: "-0.06em",
        lineHeight: "60px",
      },
      "display-md": {
        fontSize: "36px",
        letterSpacing: "-0.045em",
        lineHeight: "44px",
      },
      "display-sm": {
        fontSize: "30px",
        lineHeight: "38px",
      },
      "display-xs": {
        fontSize: "24px",
        lineHeight: "32px",
      },
      xl: ["20px", "30px"],
      lg: ["18px", "28px"],
      md: ["16px", "24px"],
      sm: ["14px", "20px"],
      xs: ["12px", "16px"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    }
  },
  plugins: [],
};
