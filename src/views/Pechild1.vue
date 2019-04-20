<template>
  <div class="swiper-container_little">
    <router-link
      tag="div"
      :to="{ name: 'Detail', params: { id:item.id } }"
      class="swiper-wrapper-like tabInfo_0 active"
      v-for="item in listdatas"
      :key="item.id"
    >
      <div class="swiper-slide-like damai-link">
        <span class="i_span">
          <img class="swiper-slide-like__poster" :src="item.imgurlF">
          <span class="swiper-slide-like__city">{{item.ni}}</span>
        </span>
        <span class="swiper-slide-like__head">{{item.timeaddress}}</span>
        <span class="swiper-slide-like__time">{{item.time}}</span>

        <div class="bottom">{{item.mag}}</div>
      </div>
    </router-link>
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
      ],
      listdatas: []
    };
  },
  created() {
    Axios.get("json/stardata.json")
      .then(res => {
        var $data = (this.listdatas = res.data);
      })
      .catch(error => {});
  }
};
</script>
<style lang="less" scoped>
.swiper-container_little {
  height: 100%;
  width: 100%;
  margin-top: 5px;
  .swiper-slide-like {
    width: 30%;
    border: 1px palevioletred solid;
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
    .bottom {
      width: 100%;
      height: 0.53333333rem;
      line-height: 0.49333333rem;
      overflow: hidden;
      padding: 0 0.13333333rem;
      font-size: 12px;
      color: rgb(247, 91, 91);
    }
  }
}
</style>

