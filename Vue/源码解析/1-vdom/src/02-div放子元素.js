import { h, init } from 'snabbdom'

let patch = init([])


let vnode = h('div#container', [
  h('h1', 'hello world'),
  h('p', '这是p标签')
])


let app = document.querySelector('#app')

let oldvNode = patch(app, vnode)
setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'HELLO'),
    h('p', '这是P标签')
  ])
  patch(oldvNode, vnode)
  patch(oldvNode, h('!'))

}, 2000)