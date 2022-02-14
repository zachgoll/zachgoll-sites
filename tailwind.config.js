const defaults = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    ...defaults,
    extend: {
      fontFamily: {
        sans: ['Lora', ...defaults.fontFamily.sans],
        display: ['Nunito', ...defaults.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
