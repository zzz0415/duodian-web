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
        <li class="item">
          <h2>{{slotprops.item.name}}</h2>
          <p>{{slotprops.item.district}}</p>
        </li>
      </template>
    </search-bar>
    <a href="javascript:;" class="position" @click="geolocation">定位当前位置</a>
    <popup-index title="选择地址" :visible="showpopup">
      <ul>
        <li class="item" v-for="(item, index) in pois" :key="index">
          <h2>{{item.name}}</h2>
          <p>{{item.district}}</p>
        </li>
      </ul>
    </popup-index>
  </div>
</template>

<script>
import AMap from 'AMap'
import map from '@/untils/map.js'
import popupIndex from '../popup/popupIndex.vue'
export default {
  components: { popupIndex },
  data () {
    return {
      searchKey: '',
      mull_nav: [],
      pois: [],
      showpopup: false
    }
  },
  watch: {
    searchKey () {
      this.changesearch()
    }
  },
  methods: {
    changesearch () {
      // JSAPI 2.0 输入提示插件名称由 AMap.Autocomplete 变更为 AMap.AutoComplete 啦！
      AMap.plugin('AMap.Autocomplete', () => {
        const autoOptions = {
          // city 限定城市，默认全国
          city: '全国'
        }
        // 实例化AutoComplete
        const autoComplete = new AMap.Autocomplete(autoOptions)
        // 根据关键字进行搜索
        autoComplete.search(this.searchKey, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          console.log(result)
          if (result) {
            this.mull_nav = result.tips
          } else {
            this.mull_nav = []
          }
        })
      })
    },
    search (item) {
      const address = {
        adcode: item.adcode,
        city: item.city,
        formattedAddress: item.name,
        district: item.address,
        ...item
      }
      this.$store.commit('user/SET_ADDRESS', address)
      this.$router.back()
      console.log(item)
    },
    geolocation () {
      map.address().then((res) => {
        this.showpopup = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  list-style: none;
  line-height: 40px;
  h2{
    font-size: 32px;
  }
  p{
    font-size: 16px;
    color: #ccc;
  }
}
.position{
  font-size: 26px;
  margin-left: 40px;
  color: black;
}
</style>
