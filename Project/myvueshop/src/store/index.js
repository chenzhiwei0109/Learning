import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 保存状态
  state: {
    userInfo: {

    }
  },
  // 计算属性 多个数据筛选 一些数据的计算
  getters: {

  },
  // 改变
  mutations: {
    // 第一个参数是之前的值
    changeLogin(state, status) {
      state.userInfo = status;
    }
  },
  // 异步 但还是要调用mutations里的函数
  actions: {
    //                     status    调用     changeLogin 传入                        
    loginAction({ commit }, user) { commit('changeLogin', user); }
  },
  // 多个模块 每个模块都有一个这个东西
  modules: {
  }
})
