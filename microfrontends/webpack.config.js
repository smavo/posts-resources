const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

module.exports = config
