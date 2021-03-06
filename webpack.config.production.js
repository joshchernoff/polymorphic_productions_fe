const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
});
