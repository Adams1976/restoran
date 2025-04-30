const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[name][ext]', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true, 
    liveReload: true, 
    open: true,
  },
};