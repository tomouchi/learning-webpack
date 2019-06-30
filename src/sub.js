import Vue from "vue";
import VueSub from "./vue/sub";
import("react"); //splitChunksの確認で使用 同じbundleファイルにbundleされる
import moment from "moment" //splitChunksの確認で使用 動的・静的で異なるファイルにbundleされる

new Vue({
  render: h => h(VueSub)
}).$mount("#vue");
