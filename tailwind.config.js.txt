/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff9ff",
          100: "#dff2ff",
          200: "#b8e8ff",
          300: "#78d7ff",
          400: "#30c2ff",
          500: "#08abff",
          600: "#0088db",
          700: "#006cb1",
          800: "#065b91",
          900: "#0a4b78",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
}