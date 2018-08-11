const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/browser.js",
  mode: "development",
  output: {
    path: __dirname + "/build",
    filename: "application.js"
   },
  devtool: "sourcemap",
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  }
  // },
  // plugins: [
  //   new HtmlWebpackPlugin(),
  //   new HtmlWebpackPlugin({  // Also generate a test.html
  //     filename: 'dashboard.html',
  //     template: 'dashboard.html'
  //   })
  // ]
};
