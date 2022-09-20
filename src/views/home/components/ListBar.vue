<template>
  <div class="list">
    <div class="text">
      <a href="javascript:;"
      v-for="(item, index) in list_bar"
      :key="index"
      @click="clickfn(index)"
      :class="activeIndex === index ? 'active': ''"
      >{{item.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list_bar: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    clickfn (index) {
      this.activeIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  @include wh(100%, auto);
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
  .text{
  width: 100%;
  height: 86px;
  border-bottom: 1px solid $color-grey;
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: space-around;
  a{
    font-size: 28px;
    color: $color-text-grey;
    line-height: 86px;
    &.active{
      font-size: 32px;
      color: $color-primary;
      font-weight: bold;
    }
  }
}
}
</style>
