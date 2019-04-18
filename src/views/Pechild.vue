<template>
  <div class="swiper-container_little">
    <div class="swiper-wrapper-like tabInfo_0 active" v-for="item in 8" :key="item.id">
      <div class="swiper-slide-like damai-link">
        <span class="i_span">
          <img
            class="swiper-slide-like__poster"
            src="//pimg.dmcdn.cn/perform/project/1759/175967_n.jpg?_t=1552643194044&amp;x-oss-process=image/quality,q_50/format,webp"
          >
          <span class="swiper-slide-like__city">{{item.ni}}</span>
        </span>
        <span class="swiper-slide-like__head">2018-2019赛季CBA季后赛广东东莞银行主场</span>
        <span class="swiper-slide-like__time">2019.04.26-04.28</span>
        <div class="bottom" id="bottom">
          <i>CBA总决赛广东主场</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Axios from "axios";
//import qs from "qs";
//Vue.prototype.$qs = qs;

export default {
  data() {
    return {
      mdata: [{}],
      lists: [
        { id: "1", name: "篮球" },
        { id: "2", name: "足球" },
        { id: "3", name: "跑步" }
      ]
    };
  },
  created() {
    var test = {
      type: 1,
      latitude: 0,
      longitude: 0,
      cityId: "0",
      pageIndex: 1,
      pageSize: 10,
      loginKeyH5: null,
      userId: null,
      returnDefault: true,
      projectIdList: '["590397666861"]',
      dmChannel: "b@damai_h5"
    };
    Axios.get(
      "/api/h5/mtop.damai.wireless.search.projectlist.byrecommend.get/1.0/?jsv=2.5.0&appKey=12574478&t=1555498424169&sign=bbb409cdcb9d871f63a8372449e9628b&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.projectlist.byrecommend.get&data=%7B%22type%22%3A1%2C%22latitude%22%3A0%2C%22longitude%22%3A0%2C%22cityId%22%3A%220%22%2C%22pageIndex%22%3A1%2C%22pageSize%22%3A10%2C%22loginKeyH5%22%3Anull%2C%22userId%22%3Anull%2C%22returnDefault%22%3Atrue%2C%22projectIdList%22%3A%22%5B%5C%22590397666861%5C%22%5D%22%2C%22dmChannel%22%3A%22b%40damai_h5%22%7D",

      //   this.$qs.stringify(test),
      {
        pragma: {
          "Content-type": "application/x-www-form-urlencoded",
          "content-type": "application/json;charset=UTF-8",
          "access-control-allow-credentials": true,
          "access-control-allow-origin": "https://m.damai.cn",

          "content-encoding": "gzip",

          "eagleeye-traceid": "0b01271815554984244996875e7d51",
          "mtop-x-provider":
            "abdd592a60847a279e1b5003e73602cfd57465d4bc578c999df07a259470af27372163bbe8c2b4e8519d1db9ceb57873",
          pragma: "no-cache",

          "timing-allow-origin": "*",
          vary: "Accept-Encoding",
          "x-aserver-sret": "SUCCESS",
          "x-node": "db759f084331c40cb7de1dd71d80befb",
          "x-powered-by": "m.taobao.com"
        }
      }
    );
  }
};
</script>
<style lang="less" scoped>
.swiper-container_little {
  height: 100%;
  width: 100%;
  margin-top: 15px;
  .swiper-slide-like {
    width: 30%;
    background: pink;
    float: left;
    margin-left: 10px;
    margin-bottom: 30px;

    .i_span {
      width: 100%;

      display: block;
      padding-bottom: 5px;
      .swiper-slide-like__city {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 17px;
        color: #fff;
        background: #000;
        opacity: 0.7;
      }
      .swiper-slide-like__poster {
        display: block;
        width: 100%;

        position: relative;
      }
    }
    .swiper-slide-like__head {
      height: 36px;
      margin-bottom: 5px;
      line-height: 18px;
      text-align: center;
      font-size: 14px;
      overflow: hidden;
      word-break: break-all;
      white-space: initial;
      text-overflow: ellipsis;
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0 5px;
    }
    .swiper-slide-like__time {
      display: block;
      margin-bottom: 3px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 5px;
      text-align: center;
    }
    #bottom {
      display: block;
      width: 83%;
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: #f20c22;
      padding: 0 2px;
      border: 1px solid #f20c22;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      box-sizing: border-box;

      i {
         color: #f20c22;
        transform: scale(0.5);
      }
    }
  }
}
</style>

