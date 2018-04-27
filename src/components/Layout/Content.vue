<template>
  <Content>
    <router-view></router-view>
  </Content>
</template>
<script>
  export default {
    name: 'cvi-content'
  }
</script>
<style lang="scss" scoped>
@import  './../../assets/sass/mixin.scss';
.ivu-layout-content{
  margin-top: 1vh;
  margin-bottom: 1vh;
}
@media (min-width: $md) {
  /* 屏幕小的时候自动隐藏 breadcrumb */
  .ivu-layout-content{
    margin-left: 1vh;
    margin-right: 1vh;
  }
}
</style>
