const webpackMerge = require('webpack-merge')
const ENV = require('yargs').argv.env || 'development'

module.exports = webpackMerge.smart(
  require('./webpack/common'),
  require(`./webpack/${ENV}`)
)
