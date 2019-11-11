import Vue from 'vue'
import App from './App.vue'
import Screen from './Screen.vue'
import Admin from './Admin.vue'
import MarqueeText from 'vue-marquee-text-component'
import VueRouter from 'vue-router'
import store from './store';

import '@/assets/css/tailwind.scss'
import '@/assets/css/animate.css'

Vue.config.productionTip = false
Vue.component('marquee-text', MarqueeText)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Screen },
  { path: '/admin', component: Admin }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
