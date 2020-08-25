const webpack = require('webpack');
const webpackConfig = require('../config/webpack.dll.config.js');
webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()){
        console.log(err, "编译失败");
    }
});