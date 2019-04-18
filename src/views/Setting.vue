<template>
  <div class="setting-active">
    <div class="L-header">
      <div
        class="my-hd__photo"
        style="background-image: url(&quot;//gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png&quot;);"
      ></div>
      <p class="my-hd__name"><router-link to="/login">登录/注册</router-link></p>
    </div>
    <div class="my-list">
      <div data-spm="list" class="my-bd">
        <div class="my-bd__order">
          <router-link to="/Pe" class="margin-set my-card S-M">
            <i class="iconfont icon-icon- xx"></i>
            <span class="label">我的订单</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
          <router-link to="/money" class="margin-set my-card S-M">
            <i class="iconfont icon-yue15"></i>
            <span class="label">优惠券</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
          <router-link to="/setting" class="margin-set my-card S-M">
            <i class="iconfont icon-daiyongdquan"></i>
            <span class="label">优惠券</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
        </div>
        <div class="G-T"></div>
        <div class="my-bd__want">
          <router-link to="/Receiving-address" class="margin-set my-card S-M">
            <i class="iconfont icon-woxihuan1"></i>
            <span class="label">我的关注</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
        </div>
        
        <div class="my-bd__want">
          <router-link to="/Receiving-address" class="margin-set my-card S-M">
            <i class="iconfont icon-dizhi2"></i>
            <span class="label">收货地址</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
           <router-link to="/setting" class="margin-set my-card S-M">
            <i class="iconfont icon-touxiang11"></i>
            <span class="label">常用购票人</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
           <router-link to="/setting" class="margin-set my-card S-M">
            <i class="iconfont icon-shimingrenzheng2"></i>
            <span class="label">实名认证</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
           <router-link to="/setting" class="margin-set my-card S-M">
            <i class="iconfont icon-yijianfankui8"></i>
            <span class="label">意见反馈</span>
            <i class="iconfont icon-arrow-up1"></i>
          </router-link>
           <router-link to="/setting" class="margin-set my-card S-M">
            <i class="iconfont icon-kefudianhua"></i>
            <span class="label">客服电话</span>
            <i class="iconfont s-phone" id="s-phone">1010-3721</i>
          </router-link>
        </div>
      </div>

      <!---->
      <div class="about-section">
        <div class="about-link">关于大麦</div>
        <div class="about-line">|</div>
        <div class="about-link">联系我们</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style  lang="less" >
@import "../styles/common/reset.less";
.setting-active {
  width: 100%;
  height: 100%;
  background: #f2f3f4;
  .L-header {
    display: flex;
    height: 80px;
    width: 100%;
    background: #ff1268;
    display: flex;
    align-items: center;
    .my-hd__name {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      font-size: 12px;
      color: #fff;
      padding-right: 20px;
      word-break: break-all;
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      margin-left: 15px;
    }
    .my-hd__photo {
      display: block;
      margin: 0 0.33333rem 0 0.32rem;
      width: 57px;
      height: 57px;
      background-size: 100% auto;
      background-position: top center;
      border-radius: 100%;
      border: 3px solid #fff;
    }
  }
  .my-list {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .my-bd__order {
      height: 144.8px;
      padding-top: 10px;
      .mine__list {
        height: 50px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        line-height: 1.46667rem;
        padding: 0 0.32rem 0 0 !important;
      }

      .center-children {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
    }
    .G-T {
      height: 10px;
      background: #ff1268;
    }
  }
}

.my-bd__want {
  margin-top: 10px;

  i:last-child {
    float: right;
  }
}
.margin-set {
  position: relative;
  background: #fff;
  padding: 0 15px;
  height: 49px;
  display: flex;
  align-items: center;

  .label {
    margin-left: 10px;
    color: #191a1b;
    flex: 1;
  }

  &::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
    left: 13px;
  }
}
.S-M {
  display: block;
  line-height: 49px;

  i:first-child {
    font-size: 16px;
    color: #ff1268;
  }
  i:last-child {
    float: right;
    font-size: 13px;
    color: #b3b5b8;
  }
  #s-phone{
    font-size: 7px!important;
  }
  
}
.about-section {

    font-size: .32rem;
    color: #999;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding-top: 35px;
    height: 52px;
}
 i:last-child {
    float: right;
    font-size: 13px;
    color: #b3b5b8;
  }

</style>