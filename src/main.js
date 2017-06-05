// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './view/page/App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)


Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    memModalId : '',
  },
  mutations: {

  }
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store ,
  template: '<App/>',
  components: {App}
});

