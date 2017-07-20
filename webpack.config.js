const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    rhinorex: [path.join(__dirname, './lib/index.js')],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{ loader: 'babel-loader', exclude: [/node_modules/] }],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};