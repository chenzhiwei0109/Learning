import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/:id',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/about/',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]

const router = new VueRouter({
  routes
})
let token = 'sdadasd'


// 每次跳转之前触发
router.beforeEach((to, from, next) => {
  if (token && to.path == '/') {
    // 是否需要跳转
    next()
  } else {
    next('/about')
  }

})

router.afterEach(route => {
  console.log('跳转后 ')
})


export default router
