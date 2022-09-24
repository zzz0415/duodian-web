<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="classify">
    <div class="search"><router-link to="/search"><i class="iconfont icon-sousuo"></i><span>搜索校园超市商品</span></router-link></div>
    <div class="main">
      <tab-bar
      :tabs="leftMenu"
      tab-name="categoryName"
      layout="column"
      class="left-menu"
      @change="change"
      ></tab-bar>
      <div class="right-menu">
        <tab-bar
        :tabs="rightMenu"
        tab-name="categoryName"
        class="right-menu"
        @change="rightchange"
        ></tab-bar>
      </div>
      <shop-list :shop_list="shop_list" class="shop" @change="change"></shop-list>
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll.js'
export default {
  mixins: [scroll],
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      shop_list: [],
      productList: {
        page: 1,
        page_size: 10,
        categoryId: 1
      }
    }
  },
  watch: {
    productList: {
      handler: 'initProduct',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.Listparams()
    this.initProduct()
  },
  scrollBottom () {
    this.productList.page += 1
  },
  methods: {
    async Listparams () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data[0].children)
      console.log(res)
    },
    change (index, item) {
      this.productList.page = 1
      this.productList.categoryId = item.categoryId
      this.rightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
    },
    rightchange (index, item) {
      this.productList.page = 1
      this.productList.categoryId = item.categoryId
    },
    async initProduct () {
      const res = await this.$api.product.list(this.productList)
      if (this.productList.page === 1) {
        this.shop_list = res.data
      } else {
        // this.productList.page += 1
        this.shop_list = this.shop_list.concat(res.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.classify{
  @include wh(100vw, auto);
  display: flex;
  flex-direction: column;
  .search{
    @include wh(100%, 98px);
    background: white;
    padding: 17px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
    a{
      @include wh(100%, 64px);
      background: #f6f6f6;
      border-radius: 64px;
      color: #D1D1D1;
      line-height: 10px;
      i{
        font-size: 32px;
        margin-left: 20px;
      }
      span{
        font-size: 28px;
        margin-left: 20px;
      }
    }
  }
   .main{
    flex: 1;
    padding-bottom: 101px;
    overflow: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    .right-menu{
      @include wh(100%, 60px);
      overflow: auto;
      overflow-y: hidden;
      position: sticky;
      top: 0;
      z-index: 1;
      .row{
        @include wh(1000px, 60px);
        overflow: auto;
        overflow-x: scroll;
        overflow-y: hidden;
        flex-shrink: 0;
        z-index: 1;
         ::v-deep .text{
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: flex-start;
          border-bottom: 1px solid #999;
          overflow-y: hidden;
          flex-shrink: 0;
          z-index: 1;
          a{
            color: #999;
            font-size: 20px;
            margin-left: 30px;
            &:hover{
              color: #000;
              font-weight: 500;
            }
            &.active{
              color: #000;
            }
          }
        }
      }
    }
    .shop{
      width: 77%;
      height: auto;
      position: absolute;
      top: 70px;
      left: 170px;
      ::v-deep .list{
      @include wh(100%, auto);
      padding: 10px;
      display: flex;
      border: 1px solid $color-border;
        .pic{
          img{
            @include wh(150px, 150px);
          }
        }
        dd{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 20px;
          header{
            a{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              p{
              height: 69px;
              @include ellipsis(2);
              font-size: 24px;
              color: $color-text-base;
              }
            span{
              font-size: 20px;
              color: $color-text-grey;
              margin-top: 30px;
            }
            .tag{
              margin-top: -130px;
              @include wh(100%, 40px);
              i{
                padding: 3px 10px;
                box-sizing: border-box;
                font-size: 20px;
                color: white;
                background: $color-primary;
                margin-right: 30px;
                border-radius: 40px;
              }
            }
            }
          }
          footer{
            display: flex;
            margin-top: -10px;
            p{
              font-size: 26px;
              color: $color-primary;
            }
            s{
              font-size: 20px;
              color: $color-text-grey;
              margin-top: -1px;
            }
          }
        }
      }
    }
  }
}
</style>
