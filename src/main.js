import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.scss"; // global css
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
