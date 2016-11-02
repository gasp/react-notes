const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch', // livereload
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
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
  ]
}
