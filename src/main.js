import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ShopList from './components/ShopList/ShopList.vue'
import '@/assets/css/reset.css'
import api from '@/api/api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import TabBar from '@/components/TabBar/TabBar.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import popupIndex from '@/views/popup/popupIndex.vue'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
import '@/untils/rem'
import '@/assets/icon/font_pt8ljec19n/iconfont.css'
Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.component('ShopList', ShopList)
Vue.component('TabBar', TabBar)
Vue.component('SearchBar', SearchBar)
Vue.component('popupIndex', popupIndex)
console.log(123)
new Vue({
  router,
  store,
  created () {
    if (Object.keys(this.$store.state.user.address).length < 1) {
      // this.$router.push('/geolocation')
    }
    this.$store.dispatch('user/getUserInfo')
  },
  render: h => h(App)
}).$mount('#app')
