const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
  node: {
    fs: "empty",
    net: "empty"
  },
  entry: {
    bundle: [
      'react',
      'react-dom',
      //其他库
    ],
  },
  output: {
    path: path.resolve(".", "dll"),
    filename: '[name].dev.js',
    library: '[name]_dev',
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest/[name]_dev.json',
      name: '[name]_dev',
      context: __dirname,
    })
  ]
};