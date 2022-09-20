<template>
  <div class="nav-bar">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide
    v-for="(item, index)  in Math.ceil(mull_nav.length / 10)"
    :key="index"
    >
    <div class="logo">
      <a href="javascript:;"
      v-for="(item, subindex) in mull_nav.slice(index * 10, index * 10 + 10)"
      :key="subindex">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
  </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    mull_nav: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 156px);
  a{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
      @include wh(86px, 86px)
    }
    p{
      font-size: 24px;
      color: $color-text-grey;
    }
  }
}
</style>
