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
  mode: "history",
  base: "/dist",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
