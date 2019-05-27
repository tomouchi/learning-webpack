const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "learning webpack",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./dist",
  },
};
