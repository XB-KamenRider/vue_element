// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'es6-promise/auto'
import 'element-ui/lib/theme-chalk/index.css'

/**
 * 引入公用scss
 */
import '@/assets/css/base.scss'

Vue.config.productionTip = false
/**
 * 在vue原型链上注册 axios
 */
Vue.prototype.http = axios;
/**
 * 注册域名
 */
Vue.prototype.baseUrl = '192.168.1.3:8080/';
/** 
 * 注入 vuex
*/
Vue.use(Vuex);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



