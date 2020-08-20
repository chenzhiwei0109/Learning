import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6eaa2bd0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _78401705 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6f1ae4b4 = () => interopDefault(import('..\\pages\\loginregister' /* webpackChunkName: "" */))
const _56a56dc3 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _0f485b49 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _62db5213 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _3d6fb110 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6eaa2bd0,
    children: [{
      path: "",
      component: _78401705,
      name: "home"
    }, {
      path: "login",
      component: _6f1ae4b4,
      name: "login"
    }, {
      path: "register",
      component: _6f1ae4b4,
      name: "register"
    }, {
      path: "profile/:username",
      component: _56a56dc3,
      name: "profile"
    }, {
      path: "settings",
      component: _0f485b49,
      name: "settings"
    }, {
      path: "editor",
      component: _62db5213,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _3d6fb110,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
