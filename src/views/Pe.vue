<template>
  <div class="box-show">
    <div class="mui-zebra-module" id="J_5745171055">
      <form action method="post" class="dmui-searchbar__form">
        <i class="iconfont icon-sousuo1"></i>
        <input
          type="text"
          class="dmui-searchbar__input"
          placeholder="  搜索运动员、赛事、赛季、俱乐部"
          data-spm-anchor-id="a2o71.12489654.5745171055.i0"
        >
      </form>
    </div>

    <Bananer :banners="bannerList" id="change-banner"></Bananer>
    <div class="content zebra-dm-moqie" data-mod-name="mui/zebra-dm-moqie/index">
      <div class="clip-imgs-list" style="padding-bottom:16.53333333333333%">
        <img
          class="mui-lazy"
          src="//gjusp.alicdn.com/img/img1554111312243-2200621642175.jpg@1000y-0ic_50Q.jpg_.webp"
        >
      </div>
      <div class="clip-areas" data-spm="dm-moqie">
        <router-link to tag="div" class="clip-area damai-link" v-for="item in lists" :key="item.id"></router-link>
      </div>
    </div>
    <div class="tabs-bar-wrapper">
      <ul class="tabs-nav slide-box" id="slide-box">
        <li
          class="slide-item"
          v-for="item in filmTy"
          :key="item.id"
          :class="{ active: curType === item.id }"
          @click="changeType(item)"
        >{{ item.name }}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Bananer from "../components/Bananer";
import axios from "axios";
export default {
  data() {
    return {
      bannerList: [],
      lists: [
        { id: "nowPlaying", name: "篮球" },
        { id: "comingSoon", name: "足球" },
        { id: "comingSooni", name: "跑步" }
      ],
      filmTy: [
        { id: "Pechlid", name: "篮球", href: "/Pe/Pechlid" },
        { id: 2, name: "足球", href: "/Pe/Pechlid1" },
        { id: 3, name: "跑步", href: "/Pe/Pechlid" },
        { id: 4, name: "综合", href: "/Pe/Pechlid" },
        { id: 5, name: "休闲体验", href: "/Pe/Pechlid" },
        { id: 6, name: "海外", href: "/Pe/Pechlid" }
      ],
      curType: this.$route.path.substring(7)
    };
  },
  computed: {
    tabInkBarStyle() {
      let obj = {
        transform: "translate3d(0%, 0px, 0px)",
        width: "50%"
      };
      if (this.curType === 1) {
        obj.transform = "translate3d(100%, 0px, 0px)";
      }
      return obj;
    }
  },
  components: {
    Bananer
  },
  created() {
    this.getBannerList();
  },
  methods: {
    /**
     * 请求轮播图的数据
     */
    getBannerList() {
      axios
        .get("https://m.maizuo.com/gateway?type=2&cityId=440300", {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546520171868310774513"}',
            "X-Host": "mall.cfg.common-banner"
          }
        })
        .then(res => {
          // console.log(res.data);
          let data = res.data;
          if (data.status === 0) {
            this.bannerList = data.data;
          } else {
            alert(data.msg);
          }
        });
    },

    /**
     * 切换影片类型
     * @param {Object} item 当前需要切换的类型对象
     */
    changeType(item) {
      this.curType = item.id;
      this.$router.push(item.href);
    }
  }
};
</script>
<style lang="less">
.mui-zebra-module {
  width: 100%;
  height: 52px;
  background: #fff;
  line-height: 52px;
  text-align: center;
  .dmui-searchbar__form {
    display: flex;
    position: relative;
    width: 256px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    .dmui-searchbar__input {
      margin-top: 8px;
      width: 256px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      border: 1px #b66678 solid;
      padding: 0 0 0 5px;
    }
    i {
      position: absolute;
      right: 0;
      margin-right: 10px;
    }
  }
  .swiper-container {
    width: 100%;
    height: 106px !important;
  }
  #changebanner {
    height: 106px !important;
  }
}
.zebra-dm-moqie {
  position: relative;
  width: 100%;
  height: 60px;
  .clip-imgs-list {
    position: absolute;
    height: 60px;
    width: 100%;
    .mui-lazy {
      position: absolute;
      width: 100%;
      height: 60px;
    }
  }
  .clip-areas {
    position: absolute;
    align-items: center;
    width: 100%;
    height: 60px;
    .clip-area {
      width: 33.33%;
      height: 50px;
    }
  }
}

.tabs-bar-wrapper {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  box-sizing: border-box;

  .slide-box {
    width: 100%;
    height: 43px;
    margin-top: 10px;
    display: -webkit-box;
    overflow-x: auto;

    /*适应苹果*/
    -webkit-overflow-scrolling: touch;
    overflow: -moz-scrollbars-none;
    .slide-item {
      position: relative;
      width: 85px;
      height: 40px;
      border: 1px solid #ccc;
      line-height: 40px;
      text-align: center;
      margin-right: 10px;
      border-radius: 20px;
      background-color: #dbddff;
      font-size: 13px;
      list-style: none;

      &.active {
        color: #ffffff;
        background-color: #7200ff;
      }
    }

    /*隐藏掉滚动条*/
  }
  .slide-box::-webkit-scrollbar {
    display: none;
  }
}
#change-banner {
  height: 150px;
  width: 100%;
  margin: 0 auto;
}
</style>


