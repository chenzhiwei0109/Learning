export default {
  namespaced:true,
  state: {
    userInfo: {},

  },
  // 修改数据/状态的方法
  mutations: {
    getUserInfo(state, msg) {
      state.userInfo = msg
    }
  },
  //异步修改数据。
  actions: {
    asyncAdd({ commit }) {
      commit('')
    }
  },
  modules: {
  }
}
