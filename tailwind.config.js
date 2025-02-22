/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "DarkBlue": "hsl(209, 23%, 22%)",
        "VeryDarkBlueBg": "hsl(207, 26%, 17%)",
        "VeryDarkBlueText": "hsl(200, 15%, 8%)",
        "DarkGray": "hsl(0, 0%, 52%)",
        "VeryLightGray": "hsl(0, 0%, 98%)",
        "White": "hsl(0, 0%, 100%)",
      }
    },
    fontFamily: {
      NunitoSans: ["Nunito Sans", "serif"]
    }
  },
  plugins: [],
}

