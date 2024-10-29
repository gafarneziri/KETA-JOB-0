// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure Tailwind scans your components
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto as a custom font
        monntserrat: ["Monsterrat"] ,
      },
    },
  },
  plugins: [],
};