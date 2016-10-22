import webpack from 'webpack';
import { resolve } from 'path';
import config from './src/config';
const baseConfig = require('./webpack.config.base');
const webpackConfig = Object.create(baseConfig);
const debug = require('debug')('app:webpack:config');

debug('Create webpack configuration development');
webpackConfig.entry.app = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  'webpack/hot/only-dev-server',
  resolve(__dirname, 'src', 'client.js')
];

webpackConfig.output.publicPath = `${config.server_protocol}//${config.server_host}:${config.server_port}/`;

webpackConfig.module.loaders.push(
  { test: /\.scss$/, loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'}
);

webpackConfig.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

module.exports = webpackConfig;
