<template>
  <div class="sign">
    <div class="info">
      <div class="word">
        <p>{{info[0].name}}</p>
        <span>开启美好的一天...</span>
      </div>
      <img src="@/assets/image/img_20220926080840.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['info'])
  }
}
</script>

<style lang="scss" scoped>
.sign{
  @include wh(100%, 300px);
  background: $color-primary;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .info{
    @include wh(100%, 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-sizing: border-box;
    margin-top: -10px;
    .word{
      display: flex;
      flex-direction: column;
      p{
        font-size: 36px;
        color: white;
      }
      span{
        font-size: 26px;
        color: white;
        margin-top: 5px;
      }
    }
    img{
      @include wh(80px, auto)
    }
  }
}
</style>
