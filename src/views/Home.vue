<template>
  <div>
    <Top></Top>
    <Banner></Banner>
    <Nav></Nav>
    <div class="ban">
      <img src="//img.alicdn.com/tps/i4/TB1tc1JQsbpK1RjSZFytKX_qFXa.gif_q60.jpg_.webp" alt="">
    </div>
    <Star></Star>
    <Recentshow></Recentshow>
    <!-- <van-card
      :price=cost
      :desc=des
      :title=tit
      :thumb=imageURL
      :thumb-link=tlink
    >
    </van-card> -->
  </div>
</template>
<script>
  import Banner from '../components/Banner'
  import Nav from '../components/Nav'
  import Star from '../components/Star'
  import Top from '../components/Top'
  import Recentshow from '../components/Recentshow'

  export default {
    // data() {
    //   return {
    //     imageURL: "https://gd1.alicdn.com/imgextra/i1/0/O1CN01NfLmgY2GdS9D6XOOu_!!0-item_pic.jpg_400x400",
    //     cost: "380-1390",
    //     tit: "汪峰2019演唱会",
    //     des: "深圳体育馆",
    //     tlink: "dfdf"

    //   }
    // },
    components: {
    Top,
    Banner,
    Nav,
    Star,
    Recentshow
   }

  }

</script>

<style lang="less" rel="stylesheet/less">
  @import '../styles/reset.less';
  .ban {
    img{
      height: 120px;
      width: 100%;
    }
  }
</style>