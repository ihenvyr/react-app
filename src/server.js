import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from './config';
import { resolve } from 'path';
const debug = require('debug')('app:server');

// Express
debug('Starting..');
const app = express();

// Setup body parser
debug('Configure body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));

// Setup development middleware
if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  debug('Configure webpack-dev-middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.compiler_public_path,
    hot: config.compiler_hot,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    lazy: config.compiler_lazy,
    stats: config.compiler_stats
  }));

  debug('Configure webpack-hot-middleware');
  app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(config.server_port);
debug(`Server is now running at http://${config.server_host}:${config.server_port}`);
