<template>
  <div class="s_info">
    <div data-v-d840d090 data-v-5dfd96bd class="outline">
      <div
        data-v-d840d090
        class="outline__bg__default"
        style=" background-image:url(&quot;https://gd3.alicdn.com/imgextra/i1/0/O1CN01CrehA62GdS9XmUXNC_!!0-item_pic.jpg_400x400&quot;);"
      ></div>
      <div data-v-d840d090 class="container">
        <div data-v-d840d090 class="imgframe">
          <div
            data-v-d840d090
            class="imgframe__img"
            style="background-image: url(&quot;https://gd3.alicdn.com/imgextra/i1/0/O1CN01CrehA62GdS9XmUXNC_!!0-item_pic.jpg_400x400&quot;);"
          ></div>
          <!---->
          <!---->
        </div>
        <div data-v-d840d090 class="right-content" data-spm-anchor-id="a2o71.project.0.i7">
          <p data-v-d840d090 class="right-content__title">{{items.msg1}}</p>
          <div data-v-d840d090 class="right-content__bottom">
            <div data-v-d840d090 class="price-section">
              <span data-v-d840d090 class="price">{{items.msg2}}</span>
              <span data-v-d840d090 class="dashprice"></span>
            </div>
            <!---->
            <!---->
          </div>
        </div>
      </div>
    </div>
    <div data-v-87786d5e data-v-5dfd96bd class="detail-time-info">
      <span data-v-87786d5e class="time-str">{{items.msg3}}</span>
      <span data-v-87786d5e class="time-desc">{{items.msg4}}</span>
    </div>
    <div class="location-info" data-spm-anchor-id="a2o71.project.0.i8">
      <div class="location-left">
        <span class="location-left-city">{{items.msg5}}</span>
        <p class="location-left-address">{{items.msg6}}</p>
      </div>
    </div>
    <div data-v-b684c5be data-v-5dfd96bd class="cell-content">
      <div data-v-b684c5be style="display: block;">
        <div
          data-v-b684c5be
          id="detail-html-box"
          class="project-detail-html"
          style="overflow: hidden;"
        >
          <!---->
          <div data-v-b684c5be id="item-detail-html-box">
            <p>{{items.msg7}}</p>
            <p>{{items.msg8}}</p>
            <p>{{items.msg9}}</p>
            <p>{{items.msg10}}</p>
            <p>{{items.msg11}}</p>
            <p>{{items.msg12}}</p>
            <p>{{items.msg13}}</p>
            <p>{{items.msg14}}</p>
            <p class="p-L">
              <img :src="items.urlb">
            </p>
            <p class="p-R">
              <img :src="items.urlc">
            </p>
          </div>
        </div>
      </div>
      <!---->
    </div>

    <div class="shopping">
      <div class="shopping-box">
        <router-link to="/home" tag="span" class="shopping-home iconfont icon-shouye5">首页</router-link>
        <router-link to="/home" tag="span" class="shopping-left iconfont icon-woxihuan1">收藏</router-link>
        <router-link to="/shop" tag="span" class="shopping-right iconfont icon-gouwu1">立即购买</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data() {
    return {
      items: {}
    };
  },
  methods: {
    getData() {
      Axios.get("json/mydatas.json").then(res => {
        var data = res.data;

        //拿到url里的：id
        var tmp = data.find(item => {
          window.console.log(this.$route.params.id);
          return item.id === Number(this.$route.params.id);
        });
        this.items = tmp;
      });
    }
  },
  created() {
    this.getData();
  },
  beforeRouteEnter(to, from, next) {
    // ...

    next();
  },
  //重新触发请求在在详情页通过动态参数跳转(方法2:复用)
  beforeRouteUpdate(to, from, next) {
    this.getData();

    next();
  },

  beforeRouteLeave(to, from, next) {
    // ...

    next();
  }
};
</script>

<style lang="less">
@import "../styles/reset.less";
.s_info {
  height: 100%;
  width: 100%;
  .outline[data-v-d840d090] {
    position: relative;
    width: 100%;
    height: 229px;
    background-color: rgba(0, 0, 0, 0.4);
    padding-bottom: 0;
    .outline__bg__default {
      position: absolute;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      background-size: cover;
      background-repeat: no-repeat;
      height: 229px;
      -webkit-filter: saturate(1) brightness(1.1) blur(0.6rem) contrast(0.8);
      filter: saturate(1) brightness(1.1) blur(0.6rem) contrast(0.8);
    }
    .container {
      position: relative;
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
      width: 100%;
      height: 229px;
      .imgframe {
        position: relative;
        width: 130.8px;
        height: 176.9px;
        margin-left: 20px;
        .imgframe__img {
          width: 130.8px;
          height: 176.9px;
          border-radius: 0.08rem;
          background-color: hsla(0, 0%, 100%, 0.1);
          background-repeat: center no-repeat;
          background-size: cover;
        }
      }
      .right-content {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        height: 184px;
        margin-left: 10px;
        margin-right: 10px;
      }
      .right-content__title {
        font-weight: 700;
        font-size: 17px;
        letter-spacing: 0;
        line-height: 50px;
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #fff;
      }
      .right-content__bottom {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        .price-section[data-v-d840d090] {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          flex-direction: row;
          .price {
            font-size: 20px;
            line-height: 40px;
            color: #fff;
          }
        }
      }
    }
  }
  .outline {
    padding-bottom: calc(env(safe-area-inset-bottom) * 3);
  }

  .detail-time-info[data-v-87786d5e] {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    .time-str[data-v-87786d5e] {
      font-size: 17px;
      color: #000;
      font-weight: 700;
      margin-top: 20px;
    }
    .time-desc[data-v-87786d5e] {
      font-size: 16px;
      color: #999;
      margin-top: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
  .ocation-info {
    position: relative;
    height: 86px;
    background: #fff;
  }
  .location-left {
    padding: 20px;
    height: 86px;

    .location-left-city {
      display: block;
      height: 20px;
      font-size: 15px;
      color: #000;
      width: 100%;
    }
    .location-left-address {
      font-size: 12px;
      color: #999;
      margin-top: 15px;
      height: 30px;
      border-bottom: 1px #cfcccc solid;
    }
  }
  .cell-content {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
    background-color: #fff;
    .project-detail-html {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      padding: 0 0 20px;
      margin: 0;
      #item-detail-html-box {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        padding: 20px;
        .p-L {
          width: 100%;
          text-align: center;
          margin-top: 10px;
          img {
            margin: 0 auto;
            width: 100%;
            height: 439px;
          }
        }
        .p-R {
          width: 100%;

          text-align: center;
          img {
            margin: 0 auto;
            width: 100%;
            height: 439px;
          }
        }
      }
    }
  }
  .shopping {
    padding: 0;
    margin: 0;
    position: fixed;
    bottom: 0;
    height: 55px;
    line-height: 55px;
    text-align: center;
    width: 100%;
    font-size: 16px;
    color: #000;
    overflow: hidden;
    background: #ffffff;
    padding-top: 5px;
    .shopping-box {
      display: flex;
      .shopping-home {
        padding: 0;
        margin: 0;
        display: inline-block;
        height: 50px;
        width: 25%;
        line-height: 50px;
        text-align: center;
        background: #ebe5e7;
        color: rgb(228, 95, 95);
        box-sizing: border-box;
        border-right: 1px #b8b5b5 solid;
      }
      .shopping-left {
        padding: 0;
        margin: 0;
        display: inline-block;
        height: 50px;
        width: 25%;
        line-height: 50px;
        text-align: center;
        background: #ebe5e7;
        color: rgb(228, 95, 95);
        box-sizing: border-box;
      }
      .shopping-right {
        padding: 0;
        margin: 0;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 50%;
        color: rgb(241, 236, 236);
        background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
        box-sizing: border-box;
      }
    }
  }
}
</style>
