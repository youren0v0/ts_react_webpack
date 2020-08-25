const path = require('path');
const {merge} = require("webpack-merge");
// const webpackCommon = require("./webpack.common");
const webpackCommon = require("./webpack.config");

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    publicPath: "/"
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, "../dist")
  }

})