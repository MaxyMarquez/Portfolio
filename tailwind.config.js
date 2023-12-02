/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgb(255,255,255)',
        DEFAULT: '-1px 3px 10px rgb(0,0,0)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      borderRadius: {
        'blob': '72% 28% 41% 59% / 55% 44% 49% 34%;',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),],
}


