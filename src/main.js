import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import ErrorPage from "vue-error-page";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(ErrorPage);
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

window.eventBus = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
