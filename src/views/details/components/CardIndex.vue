<template>
  <div class="main">
    <div class="price"><p>￥{{title.price / 100}}</p><span>累计销售2233份</span></div>
    <div class="title">
      <p>{{title.name}}</p>
    </div>
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
.main{
  @include wh(100%, 300px);
  background: white;
  .price{
    @include wh(100%, 120px);
    background: $color-primary;
    border-radius: 30px 30px 0 0;
    padding: 10px 0;
    box-sizing: border-box;
    p{
      margin-left: 20px;
      font-size: 56px;
      font-weight: bold;
      color: white;
    }
    span{
      display: block;
      font-size: 26px;
      color: white;
      margin-left: 30px;
      margin-top: 10px;
    }
  }
  .title{
    padding: 30px;
    box-sizing: border-box;
    p{
      font-size: 40px;
    }
  }
}
</style>
