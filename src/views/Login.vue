<template>
  <div class="login-view">
    <div class="logo">
      <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" class="logo">
    </div>
    <div class="login-form">
      <div class="form-group">
        <input
          placeholder="请输入手机号"
          class="input-control inpT"
          type="text"
          v-model="username"
          @blur="yaneng"
          @focus="disappear"
        >
      </div>
      <P :class="{ active: isActive, 'text-danger': hasError,'danger': hasE }">{{msg}}</P>
      <div class="form-group">
        <input
          placeholder="动态密码"
          class="input-cont"
          type="password"
          v-model="password"
          @blur="ypass"
        >
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
      <P :class="{ act: ispass, 'pass-danger': hasRes,'danger': hasE }">{{mpg}}</P>
      <div class="submit login-btn" @click="handleLogin">
        <span>登录</span>
      </div>
      <div class="submit-passwrod">
        <router-link tag="span" to="/center">账号密码登录</router-link>
        <router-link to="/login/newuser" tag="span">新用户注册</router-link>
      </div>
      <div class="about-damai">
        <router-link tag="span" to>-- 关于大麦 --</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
      codeMsg: "获取动态密码",
      Countdownmuber: "",
      msg: "",
      mpg: "",
      isActive: false,
      hasError: false,
      hasE: false,
      ispass: false,
      hasRes: false,
      code: ""
    };
  },
  methods: {
    disappear() {
      this.mpg = "";
    },

    ypass() {
      if (this.password === this.code) {
        this.mpg = "认证成功！";
        this.ispass = true;
      }
      if (this.password != this.code) {
        this.mpg = "认证失败！！";
        this.hasRes = true;
      }
      if (this.password == "") {
        this.mpg = "请输入动态密码！";
        this.hasRes = true;
      }
    },
    yaneng() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.username == "") {
        this.hasE = true;
        this.msg = "请输入手机号码！";
        return;
      }
      if (!myreg.test(this.username)) {
        this.hasError = true;
        this.msg = "手机号码不正确!";
      }
      if (myreg.test(this.username)) {
        this.msg = "可以使用！";
        this.isActive = true;
      }
    },

    handleLogin() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (myreg.test(this.username) && myreg.test(this.username)) {
        alert("登陆成功！");
        this.msg = "可以登陆！";
        this.$router.push("/");
        var xx = (window.sessionStorage["Key"] = this.username);
        var xxx = window.sessionStorage.getItem("Key");

        return true;
      }
    },

    Countdown() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (myreg.test(this.username)) {
        this.mpg = "";
        var code = "";
        this.Countdownmuber = "";
        for (var i = 0; i < 6; i++) {
          var radom = Math.floor(Math.random() * 10);
          code += radom;
        }
        this.Countdownmuber = code;
        this.code = code;
        alert("您的验证码是:" + code);

        if (!this.timer) {
          this.timer = setInterval(() => {
            if (this.countdown > 0 && this.countdown <= 60) {
              this.countdown--;
              if (this.countdown !== 0) {
                this.codeMsg = "重新发送(" + this.countdown + ")";
              } else {
                clearInterval(this.timer);
                this.codeMsg = "获取动态密码";
                this.countdown = 60;
                this.timer = null;
                this.codeDisabled = false;
              }
            }
          }, 1000);
        }
      } else {
        this.mpg = "请先输入正确的手机号码！";
        this.hasRes = true;
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
        font-size: 14px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
      .input-cont {
        height: 46px;
        font-size: 14px;
        border: 0;
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
    }
    .about-damai {
      width: 100%;
      position: absolute;
      color: #999;
      text-align: center;
      bottom: 10px;
    }
  }
  .input-control-span {
    display: block;
    height: 46px;
    background: #fff;
    float: right;
    .getNumber {
      width: 88px;
      height: 46px;
      text-align: center;
      font-size: 12px;
      background: #fff;
      border: 0;
    }
  }
}
.text-danger {
  padding-left: 25px;
  color: red;
  font-size: 12px;
}
.danger {
  padding-left: 25px;
  color: red;
  font-size: 12px;
}
.active {
  padding-left: 25px;
  color: green;
  font-size: 12px;
}

.act {
  padding-left: 25px;
  color: green;
  font-size: 12px;
}
.pass-danger {
  padding-left: 25px;
  color: red;
  font-size: 12px;
}
</style>