var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/GNO'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      use: ['babel'], 
    },
    { 
      test: /\.css$/, 
      include: path.join(__dirname, 'src'),
      use: ['style-loader', 'css-loader']
    }
    ]
  }
};
