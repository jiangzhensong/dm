<template>
  <div>
    <div class="mui-zebra-module" id="J_5745171055">
      <div class="zebra-dm-search">
        <div class="dmui-searchbar" id="searchbar">
          <form action method="post" class="dmui-searchbar__form">
            <i class="iconfont icon-sousuo1"></i>
            <input
              type="text"
              class="dmui-searchbar__input"
              placeholder="          搜索运动员、赛事、赛季、俱乐部"
              data-spm-anchor-id="a2o71.12489654.5745171055.i0"
            >
          </form>
        </div>
      </div>
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
      <div class="tabs-bar">
        <ul class="tabs-nav slide-box" id="slide-box">
          <li
            class="slide-item"
            v-for="item in filmTy"
            :key="item.id"
            :class="{ active: curType === item.id }"
            @click="changeType(item)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
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
  display: flex;
  justify-content: center;
  padding: 10px;
  .zebra-dm-search {
    height: 30px;
    position: relative;
    .dmui-searchbar {
      position: relative;
      i {
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
    input {
      width: 256px;
      height: 35px;
      border: 0;
      border-radius: 14px;
      border:1px #c5c3c3 solid;
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
    width: 100%;
    .mui-lazy {
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

  .tabs-bar {
    overflow: hidden;
    width: 100%;
    .slide-box {
      width: 100%;
      height: 30px;
      margin-top: 10px;
      display: -webkit-box;
      overflow-x: auto;
      /*适应苹果*/
      -webkit-overflow-scrolling: touch;
      overflow: -moz-scrollbars-none;
    }

    .slide-item {
      width: 85px;
      height: 30px;
      border: 1px solid #ccc;
      line-height: 30px;
      text-align: center;
      margin-right: 10px;
      border-radius: 10px;
      background-color: #dbddff;
      color: #b163fc;

      &.active {
        color: #ffffff;
        background-color: #7200ff;
      }
    }
    /*隐藏掉滚动条*/
    .slide-box::-webkit-scrollbar {
      display: none;
      overflow: -moz-scrollbars-none;
    }
  }
}
#change-banner{
height: 150px;
width: 100%;
}
</style>


