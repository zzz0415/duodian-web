<template>
  <div class="order">
    <div class="word"><p>全部订单</p><a href="javascript:;">查看全部 ></a></div>
    <div class="func">
      <dl>
        <dt><img src="@/assets/image/111@2x(3).png" alt=""></dt>
        <dd>待付款</dd>
      </dl>
      <dl>
        <dt><img src="@/assets/image/222@2x(4).png" alt=""></dt>
        <dd>待配送</dd>
      </dl>
      <dl>
        <dt><img src="@/assets/image/333@2x(5).png" alt=""></dt>
        <dd>已发货</dd>
      </dl>
      <dl>
        <dt><img src="@/assets/image/444@2x(6).png" alt=""></dt>
        <dd>退款/售后</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.order{
  @include wh(90%, 300px);
  background: white;
  border-radius: 20px;
  margin-left: 5%;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-sizing: border-box;
  .word{
    @include wh(100%, 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: 32px;
    }
    a{
      font-size: 26px;
      color: #999;
    }
  }
  .func{
    @include wh(100%, 200px);
    align-items: center;
    display: flex;
    justify-content: space-between;

    dl{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      dt{
        img{
          width: 80px;
          height: auto;
        }
      }
      dd{
        font-size: 26px;
      }
    }
  }
}
</style>
