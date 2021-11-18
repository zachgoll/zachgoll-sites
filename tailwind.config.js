const defaults = require('tailwindcss/defaultTheme');

console.log(defaults.colors);

module.exports = {
  theme: {
    ...defaults,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
