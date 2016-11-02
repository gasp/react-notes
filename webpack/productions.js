const {
  LoaderOptionsPlugin,
  NoErrorsPlugin,
  optimize: {
    OccurrenceOrderPlugin,
    DedupePlugin,
    UglifyJsPlugin,
  },
} = require('webpack')

module.exports = {
  // devtool: 'cheap-module-source-map',
  // failing on webpack2
  entry: {
    main: './src/index.jsx',
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].bundle.js',
    // sourceMapFilename: '[name].[hash].map',
  },
  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new OccurrenceOrderPlugin(),
    new DedupePlugin(),
    new NoErrorsPlugin(),
    new UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      comments: false,
    }),
  ],
}
