import text from "./text.js";
import sampleText from "./sampletext";
import typescriptText from "./type";
import Vue from "vue";
import "./style.file-loader.css";
import "./style.style-loader.css";
import "./style.css";
import("react"); //splitChunksの確認で使用 同じbundleファイルにbundleされる
import("moment"); //splitChunksの確認で使用 動的・静的で異なるファイルにbundleされる

jQuery(".jquery").text("added text"); //Shimming
jQuery(".exportText").text(text); //Shimming
jQuery(".exportSampleText").text(sampleText); //Shimming
jQuery(".typescriptText").text(typescriptText.text); //modules rules typescript

import vue from "./vue/index";

new Vue({
  render: h => h(vue)
}).$mount("#vue");
