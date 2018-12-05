import Vue from "vue";
import jquery from "jquery";

import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = jquery;

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
