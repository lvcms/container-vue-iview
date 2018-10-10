<template>
<div class="login-body" id="loginBody">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  import Cache from 'lf-cache'
  export default {
    name: 'cvi-login',
    created() {
      this.eventOn()
    },
    mounted() {
      this.checkLogin()
      this.backgroundImage()
    },
    beforeDestroy() {
      this.$event.$off('form-submit-then')
      this.$event.$off('form-submit-catch')
    },
    methods: {
      /**
       * [eventOn 事件监听]
       * @return {[type]} [description]
       */
      eventOn() {
          this.$event.$on('form-submit-then', result => {
            this.handleLogin(result.data.updateModel.value)
          });
      },
      /**
       * 处理登录
       */
      handleLogin(value) {
        if (value) {
          Cache.forever('system:user',value.user)
          localStorage.setItem('system:token',value.token)
          localStorage.setItem('system:login:redirect',value.redirect)
          this.checkLogin()
        }
      },
      /**
       * 检测登录 如果登录跳转
       */
      checkLogin(){
        if (localStorage.getItem('system:token')) {
          let redirect = localStorage.getItem('system:login:redirect')
          this.$router.push(redirect)
        }else {
          this.$store.dispatch('login')
        }
      },
      /**
       * 背景图片自动更换
       */
      backgroundImage() {
          let backgroundImage = () =>{
              let loginBody = document.getElementById("loginBody")
              if (loginBody) {
                let num = Math.ceil(Math.random()*27)
                loginBody.style.backgroundImage="url(/vendor/admin/background/"+ num +".jpg)"
              }else{
                // 防止不断检测 找不到 loginBody
                clearInterval(outTime)
              }
          }
          backgroundImage()
          let outTime = setInterval(backgroundImage,10000)
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
