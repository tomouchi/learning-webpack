const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      //Shimming
      //グローバル変数にモジュールを挿す
      //https://qiita.com/ironsand/items/4f0342f5914a9ae99b0e
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      title: "learning webpack",
      filename: "index.html",
      template: "src/index.html",
      minify: {
        //https://github.com/kangax/html-minifier
        removeComments: true, //コメント削除
        collapseBooleanAttributes: true, //boolean属性を省略記法にする
        collapseWhitespace: false, //表示に影響ない無駄な空白を消す（learningなので確認しづらいのでfalse）
        collapseInlineTagWhitespace: false, //インライン要素の空白まで消す（tagからcontent間の空白のみcontent内の空白は消えない）
        keepClosingSlash: false, //終了タグない要素のスラッシュを残すか
        maxLineLength: 100, //最大行数
        removeRedundantAttributes: true, //属性値がデフォルトのものは削除（inputのtext属性とか）
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
  ],
  resolve: {
    //import時に拡張子を付けなくてもpathが解決される
    //指定するとデフォルト値が無視される
    //デフォルト['.wasm', '.mjs', '.js', '.json']
    //同じファイル名の場合は配列の最初に指定されたもので解決される
    extensions: [".samplejs"] },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "eval-source-map",
};
