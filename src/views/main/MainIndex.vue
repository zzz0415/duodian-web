<template>
  <div class="footer">
    <keep-alive>
    <router-view></router-view>
  </keep-alive>
    <nav class="nav">
      <router-link
      v-for="(item, index) in footer"
      :to="item.path"
      :key="index"
      active-class="active"
      >
      <img :src="item.img" alt="" class="img">
      <img :src="item.img2" alt="" class="img-select">
      <span>{{item.title}}</span>
    </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      footer: [
        {
          path: '/home',
          title: '首页',
          img: require('@/assets/image/index.png'),
          img2: require('@/assets/image/index-select.png')
        },
        {
          path: '/classify',
          title: '分类',
          img: require('@/assets/image/select.png'),
          img2: require('@/assets/image/classify-select.png')
        },
        {
          path: '/car',
          title: '购物车',
          img: require('@/assets/image/cart.png'),
          img2: require('@/assets/image/cart-select.png')
        },
        {
          path: '/mine',
          title: '我的',
          img: require('@/assets/image/mine.png'),
          img2: require('@/assets/image/mine-select.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  .nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-bottom: 10px;
    padding-top: 6px;
    border-top: 1px solid gray;
    box-sizing: border-box;
    background: white;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: #999;
      .img{
        width: 56px;
        height: 56px;
      }
      .img-select{
        width: 56px;
        height: 56px;
        display: none;
      }
      span{
        margin-top: 4px;
      }
      &.active{
        .img{
        width: 56px;
        height: 56px;
        display: none;
      }
      .img-select{
        width: 56px;
        height: 56px;
        display: block;
      }
      span{
        color: #EE3344;
      }
      }
    }
  }
}
</style>
