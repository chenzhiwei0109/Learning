import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    // 是否显示返回按钮，首页不显示，其它页面显示
    isShowBack: false
  },
  getters: {
    getIsShowBack(state: any) {
      return state.isShowBack
    }
  },
  mutations: {
    setIsShowBack(state:any, isShowBack: boolean) {
      state.isShowBack = isShowBack
    }
  },
  actions: {
  },
  modules: {
  }
});
