import { RouteConfig, createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/list/:type',
  name: 'List',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
},
{
  path: '/detail/:id',
  name: 'Detail',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
  component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
