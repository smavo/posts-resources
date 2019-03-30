const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devServer: {
    compress: true,
    hot: true,
    port: 8000,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common, config)
