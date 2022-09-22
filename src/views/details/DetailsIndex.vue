<template>
  <div>
    <banner-index :banner="datainfo"></banner-index>
  </div>
</template>

<script>
import BannerIndex from './components/BannerIndex.vue'
export default {
  name: 'details-index',
  components: {
    BannerIndex
  },
  data () {
    return {
      datainfo: []
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
      console.log(this.datainfo)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
