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
    colors: {
      lemon: "#82c829",
      softSilver: "#F5F5F5",
      customOrange: "#F85A40",
    },
    fontFamily: {
      fontFamily: {
        nunito: ['Nunito', 'serif'],
        merriweather: ["Merriweather", 'serif'],
        sans: ['Open Sans', 'sans-serif'],
        script: ['Nanum Pen Script', 'serif'],
        vujahday: ['Vujahday Script', 'serif'],
      },
    }
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];