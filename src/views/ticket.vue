<template>
  <div class="t_info">
    <!-- <div class="t_top">
      <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
    </div> -->
    <div class="t_person">
      <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
      <p>{{filmInfo.name}}</p>
      <p>{{filmInfo.cost}}</p>
    </div>

    <!-- <div class="t_person">
      <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
      <p>《24/7 Serendipity》</p>
      <p>￥200 起</p>
    </div> -->
    <div class="t_detail">
      <h2>介绍</h2>
      <p>
        《24/7=Serendipity》活动，将于2019年3月23日至4月23日在中国广州举办。这是继在韩国、日本之后，首次登陆中国。
        选座购买每单限6张，立即购买每单限20张。对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。
        异常订购行为包括但不限于以下情形：（1）通过同一ID订购超出限购张数的订单；（2）经合理判断认为非真实消费者的下单行为，
        包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、
        收件人、电话号码订购超出限购张数的订单。
    </p>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn
        class="iconfont iconhome"
        to="/"
        text="大麦首页"
      />
      <van-goods-action-mini-btn
        class="iconfont iconziyuan"
        text="关注"
      />
      <!-- <van-goods-action-big-btn
        text="加入购物车"
        @click="onClickBigBtn"
      /> -->
      <van-goods-action-big-btn
        primary
        text="立即购票"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filmInfo: {} // 影片详情
    }
  },
}
</script>


<style lang="less">
  @import '../styles/reset.less';
  .t_info{
    .t_top{  

      img{
        width: 100%;
        height: 144px;
      }
    }
    .t_person{
      margin-left: 18px;
      margin-top:30px;
      img{
        width: 100px;
        height: 145px;
      }
    } 
    .t_detail{
      height: 164px;
      margin:20px 18px;
      h2{
        font-size: 14px;
      }
    }   
  }
</style>
