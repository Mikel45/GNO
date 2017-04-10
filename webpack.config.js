const path = require('path');
const webpak = require('webpack');

const PATHS = {
   app: path.join(__dirname, 'src'),
   build: path.join(__dirname, 'build')
};


module.exports = {
   entry: {
      app: PATHS.app,
   },
   output: {
      path: PATHS.build,
      filename: 'bundle.js',
   },
   devServer: {
      historyApiFallback: true,
      contentBase: './'
   },
   module: {
      loaders: [{
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
         presets: ['react', 'es2015', 'stage-1']
         }
      }]
  },
};