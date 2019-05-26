module.exports = {
  arrowParens: 'always',               // 関数の引数が単一の場合に丸括弧をつけるか
  bracketSpacing: true,                // 波括弧で囲まれている中身と括弧の間に空白スペースを入れるか
  endOfLine: 'lf',                     // 改行コードを指定する
  htmlWhitespaceSensitivity: 'strict',    // css,strict,ignore、デフォルトの設定だとcssだがこれは、要素のデフォルトのdisplayプロパティの値をみてフォーマットするため、cssなどでデフォルトからdisplayを変更したそれを考慮できないためstrictが最善、まぁ、予期せぬ空白が入る場合は、ブロック要素をむ
  printWidth: 100,                      // 行の長さを指定する
  semi: true,                          // 文末にセミコロンを付けるか
  singleQuote: false,                   // 文字列をシングルクウォートで括るか
  tabWidth: 2,                         // インデントの半角スペースの数
  trailingComma: true,                 // オブジェクトのプロパティや関数の引数の最後にコンマを付けるか
};
