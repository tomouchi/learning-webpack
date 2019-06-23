import text from "./text.js";
import sampleText from "./sampletext";
import typescriptText from "./type";
import Vue from "vue";
import "./cssf.cssf";
import "./csss.CSSC";
import "./style.css";

jQuery(".jquery").text("added text"); //Shimming
jQuery(".exportText").text(text); //Shimming
jQuery(".exportSampleText").text(sampleText); //Shimming
jQuery(".typescriptText").text(typescriptText.text); //modules rules typescript

import vue from "./vue/index";

new Vue({
  render: h => h(vue)
}).$mount("#vue");
