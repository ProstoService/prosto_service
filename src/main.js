import Vue from "vue";
import jquery from "jquery";

import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = jquery;

Vue.config.productionTip = false;

require("semantic-ui-css/semantic.min.css");
require("semantic-ui-css/semantic.min.js");

new Vue({ router, render: h => h(App) }).$mount("#app");
