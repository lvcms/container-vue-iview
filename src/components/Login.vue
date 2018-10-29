<template>
<div class="login-body" :class="loginClass">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  import Cache from 'lf-cache'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'cvi-login',
    data () {
      return {
          // 随便背景颜色
          loginClass: 'login-body-'+Math.ceil(Math.random()*27)
      }
    },
    created() {

    },
    computed: {
        ...mapState({
            formSubmit: state => state.formSubmit,
        })
    },
    mounted() {
      this.checkLogin()
      this.backgroundImage()
    },
    watch: {
        formSubmit: {
            handler: 'handleLogin',
            deep: true
        },
    },
    methods: {
        ...mapActions([
            'login',
        ]),
      /**
       * 处理登录
       */
      handleLogin() {
        let value = this.formSubmit.value
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
          this.login()
        }
      },
      /**
       * 背景图片自动更换
       */
      backgroundImage() {
          let backgroundImage = () =>{
            this.loginClass = 'login-body-' + Math.ceil(Math.random()*27)
          }
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

.login-body-1{
  background-image:url('../assets/img/1.jpg');
}
.login-body-2{
  background-image:url('../assets/img/2.jpg');
}
.login-body-3{
  background-image:url('../assets/img/3.jpg');
}
.login-body-4{
  background-image:url('../assets/img/4.jpg');
}
.login-body-5{
  background-image:url('../assets/img/5.jpg');
}
.login-body-6{
  background-image:url('../assets/img/6.jpg');
}
.login-body-7{
  background-image:url('../assets/img/7.jpg');
}
.login-body-8{
  background-image:url('../assets/img/8.jpg');
}
.login-body-9{
  background-image:url('../assets/img/9.jpg');
}
.login-body-10{
  background-image:url('../assets/img/10.jpg');
}
.login-body-11{
  background-image:url('../assets/img/11.jpg');
}
.login-body-12{
  background-image:url('../assets/img/12.jpg');
}
.login-body-13{
  background-image:url('../assets/img/13.jpg');
}
.login-body-14{
  background-image:url('../assets/img/14.jpg');
}
.login-body-15{
  background-image:url('../assets/img/15.jpg');
}
.login-body-16{
  background-image:url('../assets/img/16.jpg');
}
.login-body-17{
  background-image:url('../assets/img/17.jpg');
}
.login-body-18{
  background-image:url('../assets/img/18.jpg');
}
.login-body-19{
  background-image:url('../assets/img/19.jpg');
}
.login-body-20{
  background-image:url('../assets/img/20.jpg');
}
.login-body-21{
  background-image:url('../assets/img/21.jpg');
}
.login-body-22{
  background-image:url('../assets/img/22.jpg');
}
.login-body-23{
  background-image:url('../assets/img/23.jpg');
}
.login-body-24{
  background-image:url('../assets/img/24.jpg');
}
.login-body-25{
  background-image:url('../assets/img/25.jpg');
}
.login-body-26{
  background-image:url('../assets/img/26.jpg');
}
.login-body-27{
  background-image:url('../assets/img/27.jpg');
}

</style>
