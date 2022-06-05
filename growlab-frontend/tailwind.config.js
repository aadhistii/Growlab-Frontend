module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-sienna': '#F21C4A',
        'my-sin': '#F8B24A',
        'shamrock': '#28DD8D',
        'cyprus': '#080B2C',
        'silver': '#BEBEBE',
        'dim-grey': '#666666',
        'light-grey': '#F8FAFB',
        'white': '#FFFFFF',
      },
      screens: {
        '3xl': '1650px',
      },
    },
  },
  plugins: [],
}