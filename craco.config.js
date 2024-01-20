// craco.config.js
const nodePolyfills = require('node-polyfill-webpack-plugin')

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          fs: false, // You may need to configure this depending on your use case
          path: require.resolve('path-browserify'),
        },
      },
      plugins: [new nodePolyfills()],
    },
  },
}
