import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)

//const router = new VueRouter({ routes: routes }) 
const router = new VueRouter({
  routes//,
  //mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

