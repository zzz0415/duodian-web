<template>
  <div class="popup" v-show="visible">
    <div class="popup-box">
      <header>
        <h2>{{title}}</h2>
        <a href="javascript:;">取消</a>
      </header>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean
  }
}
</script>

<style lang="scss" scoped>
.popup{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  .popup-box{
    @include wh(100%, auto);
    position: absolute;
    bottom: 0;
    background: #fff;
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      box-sizing: border-box;
      height: 94px;
      h2{
        font-size: 30px;
      }
      a{
        font-size: 30px;
        color: black;
      }
    }
  }
}
</style>
