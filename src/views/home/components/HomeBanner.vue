<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide
    v-for="(item, index) in banner"
    :key="index"
    class="swiper-slide"
    >
    <img :src="item.img" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
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
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      banner: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper{
  .swiper-slide{
    img{
      @include wh(100%, auto);
    }
  }
  .swiper-pagination{
    ::v-deep .swiper-pagination-bullet{
      width: 18px;
      height: 18px;
      background: red;
    }
  }
}
</style>
