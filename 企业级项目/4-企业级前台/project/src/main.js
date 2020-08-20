import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/rem'
import { Button, NavBar, Toast, Icon, Swipe, SwipeItem } from 'vant';
Vue.use(Button).use(NavBar).use(Toast).use(Icon).use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

if (process.env.NODE_ENV == 'development') require('@/api/mock.js')




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
