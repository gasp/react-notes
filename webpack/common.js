const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = require('yargs').argv.env || 'development'

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: ['node_modules'],
    // breaks eslint
    // alias: {
    //   component:
    // }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader', 'source-map-loader'],
      },
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [['es2015', { modules: false }], 'stage-0', 'react'],
          // stage-0 required for redux-saga
          // stage-1 safe zone, reliable chance that stuffs be
          // stage-2 only standardized features
          plugins: ['transform-decorators-legacy', 'react-hot-loader/babel', 'transform-runtime'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file',
        query: {
          name: 'img/[hash:6].[ext]',
        },
      },
      {
        test: /\.woff2?$/,
        loader: 'url',
        query: {
          name: 'fonts/[name].[ext]',
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file',
        query: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    // inject script into index
    new HtmlWebpackPlugin({
      template: `${process.cwd()}/src/index.html`,
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${ENV}"`,
      },
    }),
  ],
}
