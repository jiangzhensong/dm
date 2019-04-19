<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1O6RxQHvpK1RjSZPiSuvmwXXa.jpg_q60.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1eIXzLMDqK1RjSZSySuuxEVXa.jpg_q60.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1Sd4rQPDpK1RjSZFrSuu78VXa.jpg_q60.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1wIZ2QCzqK1RjSZPcSuvTepXa.jpg_q60.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1muV0QNnaK1RjSZFBSuwW7VXa.jpg_q60.jpg_.webp">
            </div>
            <div class="swiper-slide">
                <img src="//img.alicdn.com/tps/i4/TB1zq..jnZmx1VjSZFGSuux2XXa.jpg_q60.jpg_.webp">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  mounted(){
    new Swiper('.swiper-container',{
        autoplay: {
            delay:1500,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
  }
}
</script>
<style lang="less">
.swiper-container {
    margin-top:44px;
    width: 100%;
    height: 120px;
    img{
        width: 100%
    }
    .swiper-pagination{
        .swiper-pagination-bullet{
            opacity: 0.5;
        }
        .swiper-pagination-bullet-active{
            opacity: 0.8;
            background-color: #ffffff;
        }
    }
}  
</style>
