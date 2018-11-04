// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import axios from 'axios'

axios.defaults.withCredentials = true;
Vue.use(Vant)
Vue.config.productionTip = false
//将axios绑定到vue的原型链上
Vue.prototype.$axios = axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
