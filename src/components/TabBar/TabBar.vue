<template>
  <div class="list" :class="{ [layout]: true }">
    <div class="text">
      <a href="javascript:;"
      v-for="(item, index) in tabs"
      :key="index"
      @click="change(index, item)"
      :class="activeIndex === index ? 'active': ''"
      >{{item[tabName]}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    tabName: {
      type: String,
      default: 'text'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
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
  overflow: auto;
  .text{
  width: 100%;
  height: 86px;
  border-bottom: 1px solid $color-grey;
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: space-around;
  overflow: auto;
  a{
    font-size: 24px;
    color: $color-text-grey;
    line-height: 86px;
    &.active{
      font-size: 28px;
      color: $color-primary;
      font-weight: bold;
    }
  }
}
  &.column{
    @include wh(172px, auto);
    background: #F6F6F6;
    overflow: auto;
    flex-shrink: 0;
    .text{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      overflow: auto;
      a{
        line-height: 63px;
        font-size: 24px;
        color: #999;
        &.active{
          color: $color-primary;
          background: white;
    }
  }
}
  }
}
</style>
