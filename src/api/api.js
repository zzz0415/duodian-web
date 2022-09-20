import axios from '@/untils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/product', params)
  }
}
export default (Vue) => {
  Vue.prototype.$api = api
}
