import "semantic-ui-css/semantic.min.css";

import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

window.eventBus = new Vue({ router, render: h => h(App) }).$mount("#app");
