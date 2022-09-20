<template>
  <div>
    <search-bar></search-bar>
    <home-banner></home-banner>
    <nav-bar :mull_nav="mull_nav"></nav-bar>
    <today-sale></today-sale>
    <list-bar :list_bar="list_bar" @change="change" ref="listbar"></list-bar>
    <shop-list :shop_list="shop_list"></shop-list>
  </div>
</template>

<script>
import HomeBanner from './components/HomeBanner.vue'
import SearchBar from './components/SearchBar.vue'
import NavBar from './components/NavBar.vue'
import TodaySale from './components/TodaySale.vue'
import ListBar from './components/ListBar.vue'
import ShopList from '@/components/ShopList/ShopList.vue'
export default {
  components: {
    HomeBanner,
    SearchBar,
    NavBar,
    TodaySale,
    ListBar,
    ShopList
  },
  data () {
    return {
      mull_nav: [],
      list_bar: [],
      shop_list: [],
      productList: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  watch: {
    productList: {
      handler: 'initProduct',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.initNum()
    this.initProduct()
  },
  mounted () {
    window.addEventListener('scroll', this.product, false)
  },
  methods: {
    product () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = Math.ceil(document.querySelector('html').scrollTop)
      if (pageHeight - scrollTop < windowHeight + 10) {
        this.productList.page += 1
      }
    },
    initNum () {
      this.$api.home.base().then((res) => {
        this.mull_nav = res.data.data.mull_nav
        this.list_bar = res.data.data.hot_nav
        console.log(this.list_bar)
      })
    },
    async initProduct () {
      const res = await this.$api.product.list(this.productList)
      if (this.productList.page === 1) {
        this.shop_list = this.shop_list.concat(res.data.data)
      } else {
        this.shop_list = res.data.data
      }
    },
    change (index) {
      this.productList.classid = index
      if (this.productList.classid >= 0) {
        this.productList.page++
        this.initProduct()
        window.scrollTo(0, this.$refs.listbar.$el.offsetTop)
      }
    }
  }
}
</script>

<style>

</style>
