module.exports = {
  entry: "./src/browser.js",
  mode: "development",
  output: {
    filename: "build/application.js",
    publicPath: "/"
  },
  devtool: "sourcemap",
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  }
};
