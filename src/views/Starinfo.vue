<template>
  <div class="s_info">
    <div class="s_top">
      <img src="//intercms.damai.cn/artist/bgpic/1534413408234/1534413408234.jpg?x-oss-process=image/resize,w_750,/quality,q_50/format,webp" alt="">
    </div>
    <div class="s_person">
      <img src="//intercms.damai.cn/artist/pic/1534413408234/1534413408234-main.jpg?x-oss-process=image/quality,q_50/format,webp" alt="">
      <p>林俊杰</p>
      <p>93. 30万 粉丝</p>
    </div>
    <div class="s_list">
      <div class="s_content">
        <div class="s_time">
          <span class="t_week">周六</span>
          <span class="t_day">20</span>
          <span class="t_month">4月</span>
        </div>
        <div class="s_detail">
          <div class="s_title">JJ 林俊杰《圣所2.0》世界巡回演唱会</div>
          <div class="s_site">厦门 · 厦门体育中心体育场</div>
        </div>
      </div>
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
      <van-goods-action-big-btn
        primary
        text="购买门票"
      />
    </van-goods-action>
  </div>
</template>
<style lang="less">
  @import '../styles/reset.less';
  .s_info{
    .s_top{
      img{
        width: 100%;
        height: 180px;
      }
    }
    .s_person{
      position: absolute;
      top:130px;
      left:130px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      p{
        text-align: center;
      }
    }
    .s_list{
      margin: 150px 18px 0;
      .s_content{       
        height: 100px;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        justify-content: space-around;
        .s_time{
          display: flex;
          flex-direction: column;
          justify-content: center;
          .t_day{
            font-size: 16px;
          }
        }
        .s_detail{
          margin-top: 30px;
          .s_title{
            font-size: 16px;
            font-weight: 500;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .s_site{
            color:#b5b5b5;
          }
        }
      }
    }
  }
</style>
