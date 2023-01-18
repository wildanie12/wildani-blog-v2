/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "100%",
        md: "600px",
        lg: "768px",
        xl: "1000px",
        "2xl": "1200px"
      }
    },
    extend: {
      fontFamily: {
        podkova: ["Podkova", "sans-serif"],
        poppins: ["Poppins", "sand-serif"]
      },
      colors: {
        wdSky: "#31afd4",
        wdDarkSky: "#82D7FF",
        wdBlue: "#08415c",
        wdYellow: "#f7b32b",
        wdRed: "#ff1053",
        wdDark: "#0e171b",
        wdDark2: "#253035"
      }
    }
  },
  plugins: []
}
