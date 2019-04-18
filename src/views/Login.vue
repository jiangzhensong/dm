<template>
  <div class="login-view">
    <div class="logo">
      
      <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" class="logo">
    </div>
    <div class="login-form">
      <div class="form-group">
       
        <input placeholder="请输入手机号" class="input-control inpT"  type="text" v-model="username">
      </div>
      <div class="form-group">
        <input placeholder="密码" class="input-control" type="password" v-model="password">
      </div>
      <div class="submit login-btn" @click="handleLogin">
        <span>登录</span>
      </div>
       <div class="submit-passwrod " @click="handleLogin">
        <router-link tag="span" to="/Newuser">账号密码登录</router-link><router-link to="/Newuser" tag="span">新用户注册</router-link>
      </div>
      <div class="about-damai " @click="handleLogin">
        <router-link tag="span" to="">-- 关于大麦 --</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/")
     
      var xx = window.sessionStorage['Key'] =this.username;
      var xxx = window.sessionStorage.getItem('Key')
      window.console.log(xxx,xx)
    }
  }
};
</script>

<style lang="less">
@import "../styles/common/mixins.less";

body {
  background: #fff;
}

.login-view {
  font-size: 16px;
  overflow: hidden;

  .logo {
    margin: 20px auto 40px;
    text-align: center;
    height: 43px;
    line-height: 60px;
    padding-bottom: 20px;

    img {
      height: 60px;
    }
  }

  .login-form {
    
    .form-group {
     
      .border-1-bottom;
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
    }

    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff1268;
      height: 44px;
      color: #fff;
      border: none;
    }
    .submit-passwrod{
      display: flex;
      justify-content: space-between;
      padding: 25px;
     color: #999;
    }
    .about-damai{
      width: 100%;
      position: absolute;
      color: #999;
      text-align: center;
      bottom: 10px;
       
    }
  }
}
</style>