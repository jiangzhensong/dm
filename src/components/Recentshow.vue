<template>
  <div id="recent">
    <div class="recent_title">
      <h2>近期演出</h2>
      <router-link to="/perform" tag="a">
        更多演出
        <i class="iconfont iconjiankuohaoxiyou"></i>
      </router-link>
    </div>
    <div class="recent_week">
      <span>今天</span>
      <span>明天</span>
      <span>周三</span>
      <span>周四</span>
      <span>周五</span>
      <span>周六</span>
      <span>周日</span>
    </div>
    <div class="recent_content" >
      <ul>
        <router-link :to=item.rid tag="li"  v-for="item in mList" v-bind:key=item.id>
          <img :src="item.imgurl" alt="">
          <h3>{{item.name}}</h3>
          <p>{{item.cost}}</p>
        </router-link>

        <!-- <router-link to="/ticket" tag="li">
          <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
          <h3>《24/7 Serendipity》</h3>
          <p>￥200 起</p>
        </router-link>
        <li>
          <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
          <h3>《24/7 Serendipity》</h3>
          <p>￥200 起</p>
        </li>
        <li>
          <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
          <h3>《24/7 Serendipity》</h3>
          <p>￥200 起</p>
        </li>
        <li>
          <img src="//pimg.dmcdn.cn/perform/project/1747/174771_n.jpg?_t=1551770083344&x-oss-process=image/quality,q_60/format,webp" alt="">
          <h3>《24/7 Serendipity》</h3>
          <p>￥200 起</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mList:[

        {
          "id": 1,
          "name": "杨千嬅巡回演唱会",
          "cost": "￥200-538",
          "imgurl": "https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01C27Vl72GdS9jgLKO1_!!0-item_pic.jpg",
          "rid":"/detailitem/590864257818?id=yanchanghui"
        },
        {
          "id": 2,
          "name": "郭富城“舞林密码”",
          "cost": "￥435-750",
          "imgurl": "https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01qzoLTp2GdS936W9kY_!!0-item_pic.jpg",
          "rid":"/detailitem/588531131706?id=yanchanghui"
        },
        {
          "id": 3,
          "name": "Isaac Gracie",
          "cost": "￥200-538",
          "imgurl": "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01EMaI0M2GdS9KD6uJA_!!0-item_pic.jpg",
          "rid":"/detailitem/587923645008?id=yanchanghui"
        }
      ]
    }
  }
}
</script>


<style lang="less">
  #recent{
    height: 380px;
    margin-left:18px;
    .recent_title{
      display: flex;
      justify-content: space-between;
      margin:18px 12px 18px 0;
      h2{
        font-weight: 700;
        font-size: 16px;
      }
      a{
        color: #b5b5b5;
      }
    }
    .recent_week{
      display: flex;
      justify-content: space-between;
      margin-right: 18px;
      margin-bottom: 20px;
    }
    .recent_content{
      ul{
        &::-webkit-scrollbar { //去除滚动条，设置滚动条的背景颜色为透明 
        background-color: transparent;
        display:none;
        }
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      li{
        flex:1 0 auto;
        margin-right: 14px;
          img{
            width: 130px;
            height: 190px;

          }
          h3{
            font-weight: 700;
          }
        }
      }
    }

  }
</style>

