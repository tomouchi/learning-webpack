import text from "./text.js";
import sampleText from "./sampletext";
import typescriptText from "./type";
import Vue from "vue";

jQuery(".jquery").text("added text"); //Shimming
jQuery(".exportText").text(text); //Shimming
jQuery(".exportSampleText").text(sampleText); //Shimming
jQuery(".typescriptText").text(typescriptText.text); //modules rules typescript

import vue from './vue'
new Vue({
  render: h => h(vue)
}).$mount("#vue");
