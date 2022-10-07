<template>
  <div id="container"></div>
</template>

<script>
import map from '@/untils/map.js'
export default {
  mounted () {
    map.address().then((res) => {
      console.log(res)
    })
  },
  methods: {
    address () {
    }
  }
}
</script>

<style lang="scss" scoped>
#container {width:100vw; height: 100vh; }
</style>
