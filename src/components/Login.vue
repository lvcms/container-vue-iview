<template>
<div class="login-body" id="loginBody">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  export default {
    name: 'cvi-login',
    created() {
      // console.log('aaa');
    },
    mounted() {
      this.backgroundImage()
    },
    methods: {
      backgroundImage() {
          let backgroundImage = () =>{
              let num = Math.ceil(Math.random()*27)
              document.getElementById("loginBody").style.backgroundImage="url(/vendor/admin/background/"+ num +".jpg)";
          }
          backgroundImage()
          setInterval(backgroundImage,10000)
      }
    }
  }
</script>
<style lang="scss">
.login-body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20A0FF;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  position:absolute;
  width: 100%;
  height:100%;
}
.login-item{
  margin-bottom: 6.18%;
}
</style>
