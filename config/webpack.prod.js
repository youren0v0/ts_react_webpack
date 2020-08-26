const {merge} = require("webpack-merge");
// const webpackCommon = require("./webpack.common");
const webpackCommon = require("./webpack.config");

console.log('building...')
module.exports = merge(webpackCommon, {
  mode: 'production',
})