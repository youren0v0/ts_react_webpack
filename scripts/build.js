const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');
// const webpackConfig = require('../config/webpack.common.js');

webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()){
        console.log(err, "编译失败");
    }
});