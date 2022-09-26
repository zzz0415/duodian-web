<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <user-index></user-index>
    <order-index></order-index>
    <mine-card></mine-card>
  </div>
</template>

<script>
import MineCard from './components/MineCard.vue'
import OrderIndex from './components/OrderIndex.vue'
import UserIndex from './components/UserIndex.vue'
export default {
  components: {
    UserIndex,
    OrderIndex,
    MineCard
  }
}
</script>

<style lang="scss" scoped>
.page{
  @include wh(100%, 100vh);
  background: #f6f6f6;
}

</style>
