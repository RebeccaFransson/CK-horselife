
// Set jQuery as global variable
import * as jQuery from 'jquery'
window.$ = jQuery

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
