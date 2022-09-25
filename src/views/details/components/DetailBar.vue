<template>
  <div class="detail">
    <p>商品详情</p>
    <span v-html="title.detail"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: []
  }
}
</script>

<style lang="scss" scoped>
.detail{
  @include wh(100%, auto);
  background: white;
  margin-top: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  p{
    font-size: 36px;
    margin-left: 30px;
  }
  span{
    @include wh(100%, auto);
    display: block;
    margin-top: 20px;
    ::v-deep img{
      @include wh(100%, auto);
    }
  }
}
</style>
