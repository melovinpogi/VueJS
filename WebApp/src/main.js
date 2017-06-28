// importing
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

//  VueResource is making web requests and handle responses using a XMLHttpRequest or JSONP.
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)

import Routes from './routes'
//register routes
const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
