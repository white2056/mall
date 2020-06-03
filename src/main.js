import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

fastClick.attach(document.body)

Vue.use(vueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
