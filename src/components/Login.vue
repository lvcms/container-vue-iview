<template>
<div class="login-body" id="loginBody">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  import { mapState } from 'vuex'
  import Cache from 'lf-cache'
  export default {
    name: 'cvi-login',
    computed: {
      ...mapState({
        callbackData: state => state.callbackData,
      })
    },
    watch: {
      callbackData:'handleLogin'
    },
    methods: {
      /**
       * 处理登录
       */
      async handleLogin() {
        let status = this.callbackData.data.updateModel.status
        let value = this.callbackData.data.updateModel.value
        if (value) {
          localStorage.setItem('system:token',value.token)
          await Cache.forever('system:user',value.user)
          await Cache.forever('system:redirect',value.redirect)
          await this.checkLogin()
        }
      },
      /**
       * 检测登录
       */
      async checkLogin(){
        if (localStorage.getItem('system:token')) {
          let redirect = await Cache.get('system:redirect')
          this.$router.push(redirect)
        }else {
          console.log('没有找到 token 请检查');
        }
      },
      backgroundImage() {
          let outTime = setInterval(backgroundImage,10000)
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
      }
    },
    created() {
      // console.log('aaa');
    },
    mounted() {
      this.backgroundImage()
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
