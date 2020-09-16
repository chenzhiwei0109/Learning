// 维护状态
// 修改状态
// IBU
// getter
// state
// 插件
// mixin

let Vue;

class Store {
  // options = { state:{}, mutations:{ add(state,data){} }  }
  constructor(options = {}) {
    this.state = new Vue({
      data: options.state
    })

    // 初始化mutations变更
    this.mutations = options.mutations || {}

    this.actions = options.actions || {}

    // getter
    options.getters && this.handleGetters(options.getters)
  }

  // 触发mutations
  // commit('add',1)
  commit = (type, arg) => {
    // 获取mutations里的指定函数
    const fn = this.mutations[type]
    fn(this.state, arg);
  }

  dispatch = (type, arg) => {
    const fn = this.actions[type]
    // 返回值，如果是promise可以链式
    return fn({ commit: this.commit, state: this.state }, arg);
  }

  // getters:{  } 
  handleGetters(getters) {
    this.getters = {}
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}



function install(_Vue) {
  Vue = _Vue;

  // 混入：把store放到vue原型
  Vue.mixin({
    beforeCreate() {
      // $options里
      if (this.$options.store) {
        Vue.prototype.$_store = this.$options.store;
      }
    }
  })
}

export default { Store, install }