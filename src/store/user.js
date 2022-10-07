import { api } from '@/api/api.js'
import storage from '@/untils/storage'
const user = {
  namespaced: true,
  state: {
    info: {},
    address: storage.getItem('address') || {}
  },
  getters: {
  },
  mutations: {
    SET_USERINFO (state, payload) {
      state.info = payload
    },
    SET_ADDRESS (state, payload) {
      state.address = payload
      storage.setItem('address', payload, 1000 * 60 * 60 * 3)
    }
  },
  actions: {
    getUserInfo ({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        api.user.info().then((res) => {
          commit('SET_USERINFO', res.data)
        })
      }
    }
  }
}
export default user
