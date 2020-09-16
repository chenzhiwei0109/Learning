import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters:{
    comp(state){
      return state.num*2
    }
  },
  mutations: {
    add(state, num) {
      state.num += num
    }
  },
  actions: {
    addApi({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('add', 1)
          resolve('ok')
        }, 2000)
      })
    }
  }
})