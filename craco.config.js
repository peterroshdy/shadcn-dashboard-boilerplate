// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'components'),
      'components/ui': path.resolve(__dirname, 'src/components/ui'),
      'utils': path.resolve(__dirname, 'lib/utils'),
    },
  },
};
