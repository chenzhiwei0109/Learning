// 1.导入模块
// 2.注册模块
// 3.使用h函数第二个参数传入模块需要的数据对象
import { h, init } from 'snabbdom'

import style from 'snabbdom/modules/style'
import evetlisteners from 'snabbdom/modules/eventlisteners'

let patch = init([style, evetlisteners])

let vnode = h('div', {
  style: {
    backgroundColor: 'red'
  },
  on: {
    click: handle
  },
},
  [
    h('h1', 'xxx'),
    '文字'
  ]
)


let app = document.querySelector('#app')

let oldNode = patch(app,vnode)

function handle() {
  console.log(1)
}