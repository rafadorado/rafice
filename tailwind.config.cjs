const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
   
   
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        alice: ['Alice'],
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        primary: '#8CAC8F',
        light: '#FFFEF2',
        dark: '#4D4848'
      },
	  },
  },
  plugins: [],
}
