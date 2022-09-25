<template>
  <div>
    <search-bar
    v-model="searchKey"
    clear
    placeholder="请输入要搜索的内容"
    @search="search"
    :tip-list="mull_nav"
    >
      <template v-slot:tip="slotprops">
        <li>{{slotprops.item.title}}</li>
      </template>
    </search-bar>
    <shop-list :shop_list="shop_list" class="shop"></shop-list>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll.js'
export default {
  name: 'SearchIndex',
  mixins: [scroll],
  data () {
    return {
      searchKey: '',
      mull_nav: [],
      shop_list: [],
      productList: {
        page: 1,
        page_size: 10,
        categoryId: 1
      }
    }
  },
  created () {
    this.initNum()
  },
  scrollBottom () {
    this.productList.page += 1
  },
  watch: {
    searchKey (value) {
      if (!value) {
        this.mull_nav = []
      }
    },
    $route (newValue) {
      if (newValue.query.keyword) {
        this.productList.page = 1
        this.initProduct()
        this.mull_nav = []
      } else {
        this.searchKey = ''
      }
    },
    productList: {
      handler: 'initProduct',
      deep: true
    }
  },
  methods: {
    search (val) {
      this.$router.push({
        path: '/search',
        query: {
          keyword: val
        }
      })
      this.mull_nav = []
      // this.initNum()
    },
    initNum () {
      this.$api.home.base().then((res) => {
        this.mull_nav = res.data.mull_nav
      })
    },
    async initProduct () {
      const res = await this.$api.product.list(this.productList)
      if (this.productList.page === 1) {
        this.shop_list = res.data
      } else {
        // this.productList.page += 1
        this.shop_list = this.shop_list.concat(res.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
</style>
