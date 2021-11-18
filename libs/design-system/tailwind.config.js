const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  presets: [require('../../tailwind.config.js')],
  purge: createGlobPatternsForDependencies(__dirname),
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
