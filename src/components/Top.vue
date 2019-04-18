<template>
  <div id = "top">
    <router-link to="/city" >
      <i class="iconfont iconditu"></i>
      <span>全国</span>
    </router-link >
    <router-link to="/center">
    <input type="text" placeholder="搜索明星，演出比赛，场馆" />
    <i class="iconfont iconuser"></i>
    </router-link>
  </div>
</template>

<style lang="less">
  #top{
    height: 52px;
    width: 100%;
    background: #f5f5f5;
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 10px 18px 0;
    a{
        color: #222222;
        font-size: 14px;
        i{
          font-size: 16px;
        }
        span{
          margin-left: 4px;
        }
        
    }
    input {
      outline: none;
      border: 0;
      width: 230px;
      height: 28px;
      border-radius: 14px;
      padding-left: 20px;
    }
    i{
      font-size: 16px;
    }
  }
</style>