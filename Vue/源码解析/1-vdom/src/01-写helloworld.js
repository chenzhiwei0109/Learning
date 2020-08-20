import { h, init } from 'snabbdom'
let patch = init([])
let vnode = h('div#container.cls', 'helloword')//创建一个 div id=container class='cls
let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)
setTimeout(() => {
  vnode = h('div', 'Hello Snabbdom')
  patch(oldVnode, vnode)

}, 2000)

