const webpack = require('webpack');
const resolve = require('path').resolve;
const debug = require('debug')('app:webpack:config');

debug('Create webpack configuration test');
module.exports = {
  resolve: {
    root: resolve(__dirname, 'src'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: [
        'style-loader',
        'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader'
      ] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("test") })
  ]
};
