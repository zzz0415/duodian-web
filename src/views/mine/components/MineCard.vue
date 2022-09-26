<template>
  <div class="card">
    <ul>
      <li><a href="javascript:;"><img src="@/assets/image/555@2x.png" alt=""><p>我的优惠券</p></a><span class="first">8张未使用</span></li>
      <li><a href="javascript:;"><img src="@/assets/image/666.png" alt=""><p>我的优惠券</p></a></li>
      <li><a href="javascript:;"><img src="@/assets/image/777.png" alt=""><p>联系客服</p></a><span class="second">400-123-123</span></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
  @include wh(90%, 300px);
  background: white;
  border-radius: 20px;
  margin-left: 5%;
  margin-top: 40px;
  padding: 0 30px;
  box-sizing: border-box;
  ul{
    @include wh(100%, 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: black;
        img{
          @include wh(50px, auto);
        }
        p{
          font-size: 28px;
        }
      }
      span{
        font-size: 28px;
        &.first{
          color: $color-secondary;
        }
        &.second{
          color: #999;
        }
      }
    }
  }
}
</style>
