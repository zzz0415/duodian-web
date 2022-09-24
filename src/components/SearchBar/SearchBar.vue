<template>
  <div class="search-bar">
    <input v-bind="$attrs" type="text" v-model="val" @keydown.enter="search(val)"><a href="javascript:;" v-if="clear" v-show="val.length >= 1" @click="val=''"><i class="iconfont icon-guanbi"></i></a>
    <div class="search-wrap" v-show="showTip">
      <div class="search-content">
        <div
        v-for="(item, index) in tipList"
        :key="index"
        @click="search(item.title)"
        >
        <template v-if="!$scopedSlots.tip">
          {{item.title}}
        </template>
        <slot name="tip" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    clear: Boolean,
    tipList: Array
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  computed: {
    showTip () {
      return this.val.length >= 1 && this.val.length !== 0
    }
  },
  mounted () {
    console.log(this.$scopedSlots)
  },
  methods: {
    search (value) {
      this.val = value
      this.$emit('search', this.val)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
  @include wh(100%, auto);
  display: flex;
  padding: 20px 40px;
  box-sizing: border-box;
  input{
    @include wh(auto, 64px);
    flex: 1;
    background: #F6F6F6;
    border-radius: 64px;
    color: $color-text-base;
    line-height: 64px;
    font-size: 24px;
    padding-left: 40px;
    border: 0;
  }
  a{
    margin-top: -40px;
    margin-left: 10px;
    i{
      font-size: 34px;
      color: black;
    }
  }
  .search-wrap{
    position: fixed;
    top: 110px;
    left: 0;
    width: 100%;
    bottom: 0;
    // background: rgba(0, 0, 0, 0.1);
    // z-index: -100;
    .search-content{
      // @include wh(100%, 100%);
      background: #eee;
      div{
        @include wh(100%, 80px);
        background: white;
        border-bottom: 1px solid #eee;
        font-size: 32px;
        line-height: 80px;
        padding: 0 60px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
