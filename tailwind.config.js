/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        podkova: ["Podkova", "sans-serif"],
        poppins: ["Poppins", "sand-serif"]
      },
      colors: {
        wdSky: "#31afd4",
        wdBlue: "#08415c",
        wdYellow: "#f7b32b",
        wdRed: "#ff1053",
        wdDark: "#0e171b"
      }
    }
  },
  plugins: []
}
