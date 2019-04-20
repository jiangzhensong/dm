<template>
  <div class="swiper-container billboards">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
        <img :src="item.imgUrl" alt>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: {
    banners: {
      type: Array
    }
  },

  data() {
    return {
      swiper: null
    };
  },

  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        //direction: 'vertical',// 水平切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        // 如果需要前进后退按钮

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        autoplay: {
          delay: 4000, //时间 毫秒
          disableOnInteraction: false //用户操作之后是否停止自动轮播默认true
        }
      });
    }
  }
};
</script>

// 如果你的组件使用了第三方的插件，那么不要加上 scoped 会出现一些样式无法修改的问题。
<style lang="less">
.swiper-container {
  width: 100%;
  height: 210px;

  img {
    width: 100%;
  }

  // .swiper-pagination-bullet {
  //   background: #fff;
  //   opacity: 1;
  // }

  // .swiper-pagination-bullet-active {
  //   background: red;
  // }
}
</style>
