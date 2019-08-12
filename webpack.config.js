const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    // 'single-spa.config': './
    'single-spa.config': './src/root-application/single-spa.config.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }, {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true
  }
};