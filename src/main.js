// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './vendor/css/bootstrap.css'
// import './vendor/js/bootstrap.js'
import './vendor/css/animate.css'
import router from './router'
import { store } from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store, 
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
