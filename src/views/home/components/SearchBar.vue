<template>
  <div class="search-bar">
    <div class="search">
      <i class="iconfont icon-weizhi"></i>
      <span>送至: 山西省临汾市 <i class="iconfont icon-youjiantou"></i></span>
    </div>
    <router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-bar{
  @include wh(100%, 98px);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  a{
    display: flex;
    align-items: center;
    color: $color-text-grey;
    .iconfont{
      font-size: 32px;
    }
  }
  .search{
    @include wh(100%, 100%);
    display: flex;
    align-items: center;
    .iconfont{
      font-size: 32px;
    }
    span{
      font-size: 26px;
      margin-left: 10px;
      color: $color-text-grey;
    }
  }
}
</style>
