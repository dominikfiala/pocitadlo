import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Metrics from './views/Metrics.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/metrics',
      name: 'metrics',
      component: Metrics
    }
  ]
})
