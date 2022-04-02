const defaults = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    ...defaults,
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaults.fontFamily.sans],
        display: ['Ubuntu', ...defaults.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
