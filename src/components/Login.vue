<template>
<div class="login-body">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  export default {
    name: 'cvi-login',
    created() {
      console.log('aaa');
    },
    methods: {
    }
  }
</script>
<style lang="scss">
.login-body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20A0FF;
  position:absolute;
  width: 100%;
  height:100%;
}
.login-item{
  margin-bottom: 6.18%;
}
</style>
