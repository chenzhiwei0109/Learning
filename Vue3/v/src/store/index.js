import { createStore } from 'vuex'
import * as types from './action-types'
import * as api from '../api'
export default createStore({
  state: {
    planList: []
  },
  getters: {
    totalTime() {
      return 0
    }
  },
  mutations: {
    [types.SET_PLAN_LIST](state,payload){
      state.planList = payload
    }
  },
  actions: {
    async [types.SET_PLAN_LIST]({ commit }, payload) {
      let plan = await api.getPlanList()
      commit(types.SET_PLAN_LIST,plan)
    }
  },
  modules: {
  }
})
