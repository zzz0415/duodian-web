import { api } from '@/api/api.js'
const user = {
  namespaced: true,
  state: {
    info: {}
  },
  getters: {
  },
  mutations: {
    SET_USERINFO (state, payload) {
      state.info = payload
    }
  },
  actions: {
    getUserInfo ({ commit }) {
      const token = localStorage.getItem('token')
      console.log(token)
      if (token) {
        api.user.info().then((res) => {
          commit('SET_USERINFO', res.data)
        })
      }
    }
  }
}
export default user
