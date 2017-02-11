var webpack = require('webpack')

module.exports = {
  entry: './client/main.js',
  output: {filename: './client/bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
