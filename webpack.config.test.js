import { resolve } from 'path';
const baseConfig = require('./webpack.config.base');
const config = Object.create(baseConfig);
const debug = require('debug')('app:webpack:config');

debug('Create webpack configuration production');
config.entry.app = [
  resolve(__dirname, 'src', 'client.js')
];

config.output = {
  filename: '[name].[hash].js',
  path: resolve(__dirname, 'dist'),
  publicPath: `http://localhost:8000/`
};

config.module.loaders.push(
  { test: /\.scss$/, loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'}
);

module.exports = config;
