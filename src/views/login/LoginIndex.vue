<template>
  <div class="login">
    <h2>手机快捷登录</h2>
    <p>未注册过的手机号将自动创建账号</p>
    <div class="form">
      <div class="phone">
        <input type="phone" placeholder="请输入手机号" v-model="loginForm.phone">
      </div>
      <div class="code">
        <input type="text" placeholder="请输入验证码" v-model="loginForm.code">
        <button :disabled="codeDisabled" @click="sendCode">{{time > 0 ? `${time}秒后重新获取` : '获取验证码'}}</button>
      </div>
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 0,
      loginForm: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    codeDisabled () {
      return this.loginForm.phone.length !== 11 && this.time !== 0
    }
  },
  methods: {
    async login () {
      const res = await this.$api.user.login(this.loginForm)
      const callbackurl = this.$route.query.callback || '/home'
      localStorage.setItem('token', res.token)
      this.$store.dispatch('user/getUserInfo').then((res) => {
        this.$router.replace(callbackurl)
      })
    },
    async sendCode () {
      const res = await this.$api.user.sendCode({
        phone: this.loginForm.phone
      })
      this.time = 60
      const interval = setInterval(() => {
        this.time -= 1
        if (this.time <= 0) {
          clearInterval(interval)
        }
      }, 1000)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  @include wh(100vw, 100vh);
  padding: 40px;
  box-sizing: border-box;
  h2{
    font-size: 44px;
    font-weight: bold;
    margin-top: 30px;
  }
  p{
    font-size: 26px;
    color: #ccc;
    margin-top: 40px;
  }
  .form{
    @include wh(100%, auto);
    margin-top: 80px;
    .phone{
      @include wh(100%, auto);
      border-bottom: 1px solid #ccc;
      input{
        @include wh(100%, 80px);
        border: 0;
      }
    }
    .code{
      @include wh(100%, auto);
      // margin-top: 40px;
      display: flex;
      border-bottom: 1px solid #ccc;
      input{
        @include wh(100%, 80px);
        border: 0;
        margin-top: 50px;
      }
      button{
        @include wh(230px, auto);
        border: 0;
        background: none;
        margin-top: 40px;
        color: rgb(19, 179, 233);
        &.disabled{
          color: #ccc;
        }
      }
    }
  }
  button{
      @include wh(100%, 80px);
      margin-top: 100px;
      background: rgb(19, 179, 233);
      border: 0;
      border-radius: 30px;
      color: white;
    }
}
</style>
