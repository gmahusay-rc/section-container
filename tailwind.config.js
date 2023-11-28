/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //"./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/SectionContainer/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "waves": "url('../images/waves.png')"
      },
      fontFamily: {
        "beautifulFreak": ["beautiful_freakbold"],
        "sofiaPro": ["sofiapro"],
        "sofiaProBlack": ["sofiapro-black"],
        "sofiaProLight": ["sofia-prolight"]
      },
      fontSize: {
        "5xl": "120px",
        "2xl": "72px",
        "1xl": "48px",
        "2md": "36px",
        "1md": "32px",
        "3sm": "21px",
        "2sm": "18px",
        "1sm": "16px",
      },
      colors: {
        "primary": "#293F62",
        "primary-soft-black": "#1B2022"
      },
      lineHeight: {
        "5xl": "96px",
        "2xl": "60px"
      }
    },
  },
  plugins: [],
}

