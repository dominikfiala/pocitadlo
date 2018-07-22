import Vue from 'vue'
import moment from 'moment'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'ionicons/dist/css/ionicons.min.css'

Vue.config.productionTip = false

moment.locale('cs')
Vue.filter('datetime', function (date) {
  return moment(date).format('ddd D. MMMM HH:mm')
})
Vue.filter('period', function (period) {
  if (period === 'day') return 'denně'
  else if (period === 'week') return 'týdně'
  else if (period === 'month') return 'měsíčně'
  else if (period === 'quarter') return 'čtvrtletně'
  else if (period === 'year') return 'ročně'
  return 'měřené období'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
