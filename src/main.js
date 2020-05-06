import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import VueResource from "vue-resource";

require("./filters");

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

export const eventBus = new Vue();

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
