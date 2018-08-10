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
};
