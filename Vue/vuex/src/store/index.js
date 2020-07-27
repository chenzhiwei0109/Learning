import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},

  },
  // 修改数据/状态的方法
  mutations: {
    getUserInfo(state,msg) {
      state.userInfo = msg
    }
  },
  //异步修改数据。
  actions: {
  },
  modules: {
  }
})
