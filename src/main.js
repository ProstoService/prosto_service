import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import jquery from "jquery";

import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = jquery;

Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  color: "rgb(33, 133, 208)",
  failedColor: "red",
  height: "2px",
  transition: {
    speed: "1.5s",
    opacity: "0.6s",
    termination: 400
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
