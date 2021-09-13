import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import routes from "./router";
import VueDataAc from "../../dist/vue-dataAc.min.js";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
});

var OPTIONS = {
  useImgSend: false,
  openClick: false,
  openInput: false,
  maxComponentLoadTime: 500,
};

Vue.use(VueRouter);
Vue.use(VueDataAc, OPTIONS);
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
