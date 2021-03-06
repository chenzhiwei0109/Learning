import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

// vant 完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
import {
  SubmitBar,
  Card,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton, PullRefresh, List, Row, Col, Toast, CellGroup, Field, Tab, Tabs, Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload
} from 'vant'
Vue.use(GoodsAction).use(Card).use(SubmitBar)
  .use(GoodsActionIcon)
  .use(GoodsActionButton).use(PullRefresh).use(List).use(Row).use(Col).use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

import '@/mock/mock.js';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
