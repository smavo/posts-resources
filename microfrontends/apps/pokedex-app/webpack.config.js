const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, 'src/index.js')
}

module.exports = merge(common, config)
