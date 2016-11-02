const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = require('yargs').argv.env || 'development'
const path = require('path')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: ['node_modules'],
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve('./src/index.jsx'),
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    host: 'localhost',
    inline: false,
    port: 3000,
    hot: true,
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
          plugins: ['transform-decorators-legacy', 'react-hot-loader/babel'],
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
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: '',
    }]),
    new HtmlWebpackPlugin({
      template: `${process.cwd()}/src/index.html`,
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${ENV}"`,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
