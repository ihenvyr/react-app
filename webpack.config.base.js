import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import config from './src/config';
const debug = require('debug')('app:webpack:config');

debug('Create webpack configuration base');
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    root: resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.json']
  },
  entry: {
    vendor: [
      // 'mobx',
      // 'mobx-react',
      'react',
      'react-dom',
      // 'react-helmet',
      // 'react-router'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin({
      favicon: resolve(__dirname, 'src', 'static', 'favicon.ico'),
      template: resolve(__dirname, 'src', 'static', 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};

module.exports = webpackConfig;
