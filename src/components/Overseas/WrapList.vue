<template>
  <div id="WrapList">
    <div class="list-title">
      <router-link class="list-title-item" to v-for="item in 4" :key="item">
        全部分类
        <i class="iconfont icon-icon"></i>
      </router-link>
    </div>
    <ul class="list-info">
      <router-link
        :to="{name:'Detailitem',params:{id:item.id},query:{id:item.ips}}"
        class="list-info-item"
        v-for="(item,index) in showList"
        :key="index"
      >
        <router-link class="item-img" to>
          <img :src="item.verticalPic">
        </router-link>
        <div class="item-info">
          <div class="info-title">{{item.name}}</div>
          <div class="info-city">{{item.venueCity}} / {{item.showTime}} / {{item.venueName}}</div>
          <div class="price">￥{{item.priceStr}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showList: []
    };
  },
  methods: {
    getShwoList() {
      axios.get("/json/starListss.json").then(res => {
        let data = res.data;
        this.showList = res.data.data.projectInfo;
      });
    }
  },
  created() {
    this.getShwoList();
  }
};
</script>


<style lang="less">
#WrapList {
  padding: 0 15px;
  .list-title {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    .list-title-item {
      font-size: 14px;
      color: #000;
    }
  }
  .list-info {
    .list-info-item {
      height: 102px;
      margin-bottom: 38px;
      display: flex;
      justify-content: space-between;
      .item-img {
        display: block;
        width: 76px;
        height: 102px;
        img {
          display: block;
          width: 76px;
          height: 102px;
          border-radius: 5px;
        }
      }
      .item-info {
        width: 202px;
        height: 102px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info-title {
          font-size: 14px;
          line-height: 18px;
          color: #111;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          color: #111;
          font-weight: 700;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .info-city {
          font-size: 10px;
          line-height: 15px;
          color: #222;
          margin-top: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #111111;
          color: #aaa;
          padding-top: 5px;
        }
        .price {
          font-size: 12px;
          font-weight: 600;
          color: #ff1268;
        }
      }
    }
  }
}
</style>

