<template>
  <div class="index">
    <banner-index :banner="datainfo"></banner-index>
    <card-index :title="titleinfo"></card-index>
    <info-index></info-index>
    <info-index></info-index>
    <info-index></info-index>
    <detail-bar :title="titleinfo"></detail-bar>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import BannerIndex from './components/BannerIndex.vue'
import CardIndex from './components/CardIndex.vue'
import InfoIndex from './components/InfoIndex.vue'
import DetailBar from './components/DetailBar.vue'
import DetailFooter from './components/DetailFooter.vue'
export default {
  name: 'details-index',
  components: {
    BannerIndex,
    CardIndex,
    InfoIndex,
    DetailBar,
    DetailFooter
  },
  data () {
    return {
      datainfo: [],
      titleinfo: []
    }
  },
  created () {
    this.initDetails()
  },
  methods: {
    async initDetails () {
      const id = this.$route.params.id
      const res = await this.$api.product.details(id)
      this.datainfo = res.data.images
      this.titleinfo = res.data
      console.log(this.titleinfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.index{
  background: #f6f6f6;
}
</style>
