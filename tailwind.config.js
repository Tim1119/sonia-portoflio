/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors:{
        lemon:"#82c829",
        softSilver:"#F5F5F5",
        customOrange:"#F85A40",
      },
      fontFamily:{
        fontFamily: {
          sans: ['Open Sans', 'sans-serif'],
          nunito: ['Nunito', 'serif'],
          script: ['Nanum Pen Script', 'serif'],
          vujahday: ['Vujahday Script', 'serif'],
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}