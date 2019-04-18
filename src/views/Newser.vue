<template>
  <div class="login-view">
    <div class="logo">
      <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" class="logo">
    </div>
    <div class="login-form">
      <div class="form-group">
        <input placeholder="请输入手机号" class="input-control inpT" type="text" v-model="username">
      </div>
      <div class="form-group">
        <input placeholder="验证码" class="input-cont" type="password" v-model="password">
        <span class="input-control-span" @click="Countdown">
          <input
            type="button"
            class="getNumber"
            v-model="codeMsg"
            @click="Countdown"
            :disabled="codeDisabled"
          >
        </span>
      </div>

      <div class="submit login-btn" @click="handleLogin">
        <span>同意协议并注册</span>
      </div>
      <div class="agreement submit-passwrod">
        <span>
          我已阅读接受
          <a href="https://sale.damai.cn/contents/4677/13574.html" target="_blank">《大麦网会员服务协议》</a>及
          <a
            href="https://sale.damai.cn/contents/4677/13572.html"
            target="_blank"
            data-spm-anchor-id="0.7477816.0.0"
          >《隐私专项条款》</a>并同意自动注册成为会员
        </span>
      </div>
      <div class="about-damai" @click="handleLogin">
        <router-link tag="span" to>-- 关于大麦 --</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      timer: null,
      codeDisabled: false,
      // 倒计时秒数
      countdown: 60,
      // 按钮上的文字
      codeMsg: "获取验证码",
      Countdownmuber:''
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/");

      var xx = (window.sessionStorage["Key"] = this.username);
      var xxx = window.sessionStorage.getItem("Key");
      if(xxx){
       this.$router.push("/login");
      }
      window.console.log(xxx, xx);
    },
     Countdown() {
      var code = "";
      this.Countdownmuber='';
      for (var i = 0; i < 6; i++) {
        var radom = Math.floor(Math.random() * 10);
        code += radom
      }
      this.Countdownmuber=code
      alert('您的验证码是:'+code)
      window.console.log(this.Countdownmuber)
     
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--;
            if (this.countdown !== 0) {
              this.codeMsg = "重新发送(" + this.countdown + ")";
             
            } else {
              clearInterval(this.timer);
              this.codeMsg = "获取验证码";
              this.countdown = 60;
              this.timer = null;
              this.codeDisabled = false;
            }
          }
        }, 1000);
      }
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
        outline:none;
      }
      .input-cont {
        width: 65%;
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
      .input-control-span {
        float: right;
        .getNumber{
            height: 40px;
            background: #fff;
            outline:none;
            border: 0;
        }
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
    .submit-passwrod {
      display: flex;
      justify-content: space-between;
      padding: 25px;
      color: #999;
      font-size: 12.5px;
      a {
        color: #ff1268;
      }
    }
    .about-damai {
      width: 100%;
      position: absolute;
      color: #999;
      text-align: center;
      bottom: 10px;
    }
  }
}
</style>