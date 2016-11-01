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
    extensions: ['', '.js', '.json']
  },
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
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
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
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
  ],
  postcss: function() {
    const browsers = ['last 2 versions'];
    const autoprefixer = require('autoprefixer');
    // const info = autoprefixer({ browsers }).info();
    // debug(info);
    return [
      autoprefixer({ browsers })
    ];
  }
};

module.exports = webpackConfig;
