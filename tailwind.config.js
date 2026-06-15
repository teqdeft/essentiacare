/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // EssentiaCare primary purple (#604377)
        primary: {
          50: "#f4f1f9",
          100: "#e8e3f0",
          200: "#cdc2de",
          300: "#a894cc",
          400: "#8568a6",
          500: "#6c5090",
          600: "#604377",
          700: "#503863",
          800: "#3f2d4e",
          900: "#2f2139",
          DEFAULT: "#604377",
        },
        // EssentiaCare violet accent (#8638d7)
        accent: {
          50: "#f6edfd",
          100: "#ecdcfb",
          200: "#d9b9f7",
          300: "#c290f0",
          400: "#a363e3",
          500: "#8638d7",
          600: "#772fc4",
          700: "#6326a3",
          800: "#4f1f81",
          900: "#3f1a66",
          DEFAULT: "#8638d7",
        },
        brand: {
          purple: "#604377",
          "purple-dark": "#503863",
          "purple-light": "#a894cc",
          violet: "#8638d7",
          dark: "#5a476e",
          gray: "#f5f5f5",
        },
      },
      fontFamily: {
        heading: ['"DM Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #604377 0%, #8638d7 100%)",
        "cta-gradient": "linear-gradient(135deg, #604377 0%, #914ed7 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
