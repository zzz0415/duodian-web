<template>
  <div>
    正在定位。。。
  </div>
</template>

<script>
import map from '@/untils/map.js'
export default {
  mounted () {
    map.address().then((res) => {
      console.log(res)
      this.$store.commit('user/SET_ADDRESS', {
        ...res.addressCompinent,
        formattedAddress: res.formattedAddress
      })
      this.$router.replace('/home')
    }).catch(() => {
      this.$router.replace('/address')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
