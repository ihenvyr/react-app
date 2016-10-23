import webpack from 'webpack';
import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const baseConfig = require('./webpack.config.base');
const webpackConfig = Object.create(baseConfig);
const debug = require('debug')('app:webpack:config');

debug('Create webpack configuration production');
webpackConfig.entry.app = [
  resolve(__dirname, 'src', 'client.js')
];

// serve dynamically loaded routes
webpackConfig.output.publicPath = '/static/';

webpackConfig.module.loaders.push({
  test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', [
    'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader',
    'sass-loader'
  ])
});

webpackConfig.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  new ExtractTextPlugin('app.[contenthash].css', { allChunks: false }),
  new CopyWebpackPlugin([
    { from: resolve(__dirname, 'src', 'static'), to: resolve(__dirname, 'dist') }
  ])
);

module.exports = webpackConfig;
