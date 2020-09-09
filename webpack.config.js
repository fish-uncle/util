'use strict'
const path = require('path')

module.exports = {
  entry: {index: './src/index.js'},
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  }
}