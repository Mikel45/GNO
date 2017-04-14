var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/GNO'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      exclude: [/node_modules/],
      use: ['babel-loader']
    },
    { 
      test: /\.css$/, 
      include: path.join(__dirname, 'src'),
      use: ['style-loader', 'css-loader']
    }
    ]
  }
};
