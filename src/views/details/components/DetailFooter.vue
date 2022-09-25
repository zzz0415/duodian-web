<template>
  <div class="footer">
    <router-link to="/home" tag="dl">
      <dt><img src="@/assets/image/index.png" alt=""></dt>
      <dd>首页</dd>
    </router-link>
    <router-link to="/car" tag="dl">
      <dt><img src="@/assets/image/cart.png" alt=""></dt>
      <dd>购物车</dd>
    </router-link>
    <button class="addcar">加入购物车</button>
    <button class="buy">直接购买</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  @include wh(100%, 110px);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  background: white;
  border-top: 1px solid $color-grey;
  dl{
    @include wh(100px, auto);
    margin-left: 50px;
    margin-top: 10px;
    dt{
      img{
      @include wh(50px, auto);
      margin-left: 10px;
      }
    }
    dd{
      font-size: 28px;
      margin-top: 10px;
    }
  }
  .addcar{
    @include wh(28%, auto);
    border: 0;
    background: rgb(255, 183, 0);
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
  .buy{
    @include wh(32%, auto);
    border: 0;
    background: $color-primary;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
}
</style>
