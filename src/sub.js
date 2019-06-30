import Vue from "vue";
import VueSub from "./vue/sub";
import("react");
import moment from "moment"

new Vue({
  render: h => h(VueSub)
}).$mount("#vue");
