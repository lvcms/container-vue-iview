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
    overflow-x:hidden;
    margin-top: 1vh;
}
</style>
