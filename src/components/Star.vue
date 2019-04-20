<template>
  <div id="star">
    <div class="star_title">
      <h2>大咖在大麦</h2>
      <router-link to="/perform" tag="a">
        查看更多
        <i class="iconfont iconjiankuohaoxiyou"></i>
      </router-link>
    </div>
    <div class="star_main">
      <ul>
        <router-link
          :to="{ name: 'starinfo', params: { id: item.id } }"
          tag="li"
          v-for="item in starList"
          v-bind:key="item.id"
        >
          <div class="star_top">
            <div class="star_img">
              <img :src="item.imgurl" alt>
            </div>
            <div class="star_info">
              <div class="star_name">{{item.name}}</div>
              <div class="star_fans">{{item.personNum}}万粉丝</div>
            </div>
            <div class="star_follow">+ 关注</div>
          </div>
          <div class="star_yc">
            <p>最近{{item.id}}场演出</p>
            <i class="iconfont iconjiankuohaoxiyou"></i>
          </div>
        </router-link>
        <!-- <li>
              <div class="star_top">
                <div class="star_img"></div>
                <div class="star_info">
                  <div class="star_name">林俊杰</div>
                  <div class="star_fans">93.7万粉丝</div>
                </div>
                <div class="star_follow">+ 关注</div>
              </div>
              <div class="star_yc">
                <p>最近13场演出</p>
                <i class="iconfont iconjiankuohaoxiyou"></i>
              </div>
          </li>
          <li>
              <div class="star_top">
                <div class="star_img">
                </div>
                <div class="star_info">
                  <div class="star_name">林俊杰</div>
                  <div class="star_fans">93.7万粉丝</div>
                </div>
                <div class="star_follow">+ 关注</div>
              </div>
              <div class="star_yc">
                <p>最近13场演出</p>
                <i class="iconfont iconjiankuohaoxiyou"></i>
              </div>
        </li>-->
      </ul>
    </div>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  name: "myDetail",
  data() {
    return {
      starList: []
    };
  },

  methods: {
    getDetailData() {
      Axios.get("/json/stardata.json").then(res => {
        // window.console.log(res.data)
        // var data = res.data
        // var tmp = data.find(item => {
        //   return item.id === parseInt(this.$route.params.id)
        // })
        this.starList = res.data;
      });
    }
  },

  created() {
    this.getDetailData();
  }
};
</script>


<style lang="less">
#star {
  margin-top: 20px;
  .star_title {
    height: 44px;
    display: flex;
    justify-content: space-between;
    margin: 0 18px;
    h2 {
      color: #111111;
      font-weight: 700px;
      font-size: 16px;
    }
    a {
      color: #b5b5b5;
    }
  }
  .star_main {
    ul {
      &::-webkit-scrollbar {
        //去除滚动条，设置滚动条的背景颜色为透明
        background-color: transparent;
        display: none;
      }
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      margin-left: 18px;
      li {
        flex: 1 0 auto;
        box-sizing: border-box;
        width: 230px;
        height: 120px;
        margin-right: 18px;
        border: 1px solid #f9f9f9;
        .star_top {
          height: 80px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          .star_img {
            width: 50px;
            height: 50px;
            // border-radius: 50%;
            // background: url("../img/lin.jpg") no-repeat;
            // background-size: 50px 50px;
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
          .star_info {
            margin-left: 5px;
            width: 90px;
            .star_name {
              font-size: 18px;
            }
            .star_fans {
              color: #969696;
            }
          }
          .star_follow {
            margin-left: 15px;
            width: 60px;
            height: 26px;
            border: 1px solid #ff9bbf;
            border-radius: 13px;
            padding: 3px 5px;
            color: #ff9bbf;
          }
        }
        .star_yc {
          height: 40px;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>