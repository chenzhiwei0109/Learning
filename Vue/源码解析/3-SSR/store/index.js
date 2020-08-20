// 服务器渲染期间运行的都是一个实例
// 为了防止数据冲突，必须把state定义成函数，返回一个数据对象
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    // 当前用户登录状态
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}
