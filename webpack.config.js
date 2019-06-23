const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: { index: "./src/index.js", sub: "./src/sub.js" }, //オブジェクトだとそれぞれの要素をそれぞれのentryとしてbundleする
  // entry: ["./src/main.js", "./src/sub.js"], //配列だと複数のentryを1つのentryとしてbundleする
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.vue$/, loader: "vue-loader", exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //build時にHTMLにlinkタブとして追加される
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
        ],
        exclude: [/\.file-loader\.css$/, /\.style-loader\.css$/],
      },
      { test: /\.file-loader\.css$/, use: ["style-loader/url", "file-loader"] }, //HTMLファイルにlinkタグが記述されるのではなくscriptが走った時にlinkタブが追加される
      { test: /\.style-loader\.css$/, use: ["style-loader", "css-loader"] }, //webpackでの正規表現は大文字小文字判断してないため正規表現のiオプションを付けても意味がない（webpackというよりloaderの仕様かも）
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "learning webpack",
      filename: "index.html",
      template: "src/index.html",
      excludeChunks:["sub"],
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
    //https://github.com/jantimon/html-webpack-plugin#generating-multiple-html-files
    new HtmlWebpackPlugin({ filename: "sub.html", template: "src/sub.html", chunks: ["sub"] }),
    //https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // chunkFilename: '[id].css',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      //Shimming
      //グローバル変数にモジュールを挿す
      //https://qiita.com/ironsand/items/4f0342f5914a9ae99b0e
      jQuery: "jquery",
    }),
  ],
  resolve: {
    //import時に拡張子を付けなくてもpathが解決される
    //指定するとデフォルト値が無視される
    //デフォルト['.wasm', '.mjs', '.js', '.json']
    //同じファイル名の場合は配列の最初に指定されたもので解決される
    //webpack-dev-serverを動かすには.jsは必須
    extensions: [".samplejs", ".ts", ".vue", ".js"],
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "eval-source-map",
  externals: {
    chunk: ["_", "chunk"], //CDNで読み込まれた _ 変数chunkメソッド
    lodash: "_", //CDNで読み込まれた _ 変数
  },
};
