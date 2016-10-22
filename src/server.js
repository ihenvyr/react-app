const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const resolve = require('path').resolve;
const debug = require('debug')('app:server');

debug('Starting..');
const app = express();

debug('Configure body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));

app.get('/foo', (req, res) => {
  res.json({ foo: 'barr' });
});

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.development');
  const historyApiFallback = require('connect-history-api-fallback');
  const compiler = webpack(webpackConfig);

  debug('Configure connect-history-api-fallback');
  app.use(historyApiFallback({ verbose: false }));

  debug('Configure webpack-dev-middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true
    }
  }));

  debug('Configure webpack-hot-middleware');
  app.use(require('webpack-hot-middleware')(compiler));
}

if (process.env.NODE_ENV === 'production') {
  // serve static assets normally
  debug('Serve dist as /static');
  app.use('/static', express.static(resolve('dist')));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).
  debug('Serve index.html to all GET request');
  app.get('*', function (request, response){
    response.sendFile(resolve('dist', 'index.html'));
  });
}

app.listen(config.server_port);

// app.listen(config.server_port);
debug(`Server is now running at ${config.server_protocol}//${config.server_host}:${config.server_port}`);
