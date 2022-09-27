import axios from '@/untils/axios'

export const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/product', params),
    category: () => axios.get('/category'),
    details: id => axios.get(`/product/${id}`)
  },
  user: {
    login: (params) => axios.post('/user/login', params),
    sendCode: (params) => axios.get('/user/code', params),
    info: (id) => axios.get('/user/info')
  }
}
export default (Vue) => {
  Vue.prototype.$api = api
}
