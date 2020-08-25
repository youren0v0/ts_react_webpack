
  const webpack = require('webpack');
  const webpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../config/webpack.dev.js');

  const compiler = webpack(webpackConfig);
  const options = Object.assign({}, webpackConfig.devServer, {
      open: true
  })
  const server = new webpackDevServer(compiler, options);

  server.listen(3000, '100.83.96.145', () => {
      console.log('Starting server on http://localhost:8080');
  })
