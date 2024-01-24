// craco.config.js
const nodePolyfills = require('node-polyfill-webpack-plugin')

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          fs: false, // Set fs to false to exclude it
          path: require.resolve('path-browserify'),
        },
      },
      plugins: [new nodePolyfills()],
    },
  },
}
