import Vue from 'vue'
import Router from 'vue-router'
let Home = () => import('@/views/Home.vue')
let Category = () => import('@/views/Category.vue')
let Cart = () => import('@/views/Cart.vue')
let Profile = () => import('@/views/Profile.vue')
let Detail = () => import('@/views/Detail.vue')
import FooterBar from '@/components/FooterBar.vue'
import Error from '@/views/Error.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'footer-bar': FooterBar
      }, meta: {
        keepAlive: true
      }

    }, {
      path: '/category',
      name: 'category',
      // component: Category
      components: {
        default: Category,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/cart',
      name: 'cart',
      // component: Cart
      components: {
        default: Cart,
        'footer-bar': FooterBar
      }
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile,
      components: {
        default: Profile,
        'footer-bar': FooterBar
      },
      meta: {
        keepAlive: false
      }
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '*',
      component: Error
    }
  ]
})
