<template>
  <div>
    <router-link
    v-for="(item, index) in shop_list"
    :key="index"
    class="list"
    tag="dl"
    :to="`/details/${item.id}`"
    >
    <dt class="pic"><img :src="item.img" alt=""></dt>
    <dd>
      <header>
        <a href="javascript:;">
          <p>{{item.name}}</p>
          <span>累计1.5万份 / 已拼13份</span>
          <div class="tag">
            <i>自营</i>
            <i>团购</i>
          </div>
        </a>
      </header>
      <footer>
        <p>￥91.5</p><s>￥99.5</s>
      </footer>
    </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    shop_list: Array
  }
}
</script>

<style lang="scss" scoped>
.list{
  @include wh(100%, auto);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  border: 1px solid $color-border;
    .pic{
      img{
        @include wh(240px, 240px);
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
          font-size: 32px;
          color: $color-text-base;
        }
        span{
          font-size: 28px;
          color: $color-text-grey;
          margin-top: 20px;
        }
        .tag{
          margin-top: -30px;
          @include wh(100%, 40px);
          i{
            padding: 6px 20px;
            box-sizing: border-box;
            font-size: 24px;
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
        p{
          font-size: 36px;
          color: $color-primary;
        }
        s{
          font-size: 24px;
          color: $color-text-grey;
          margin-top: 10px;
        }
      }
    }
  }
</style>
