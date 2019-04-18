<template>
  <div id="nav">
    <ul>
      <router-link to="/perform/yanchanghui" tag="li">
        <a href="">
          <i class="iconfont iconmaikefeng"></i>
          <span>演唱会</span>
        </a>
      </router-link>
      <router-link to="/perform/huajv" tag="li">
          <a href="">
            <i class="iconfont iconhuajugeju28"></i>
            <span>话剧歌剧</span>
          </a>
      </router-link>
      <router-link to="/perform/yinyue" tag="li">
          <a href="">
            <i class="iconfont icongangqin"></i>
            <span>音乐会</span>
          </a>
      </router-link>
      <router-link to="/pe" tag="li">
          <a href="/pe">
            <i class="iconfont icontiyu"></i>
            <span>体育</span>
          </a>
      </router-link>
      <router-link to="/perform/zatan" tag="li">
          <a href="">
            <i class="iconfont iconquyuanzatan28"></i>
            <span>曲苑杂谈</span>
          </a>
      </router-link>
      <router-link to="/perform/etong" tag="li">
          <a href="">
            <i class="iconfont iconqinzi"></i>
            <span>亲子</span>
          </a>
      </router-link>
      <router-link to="/perform/xiuxian" tag="li">
          <a href="">
            <i class="iconfont iconzhanlanxiuxian28"></i>
            <span>展览休闲</span>
          </a>
      </router-link>
      <router-link to="/overseas" tag="li">
          <a href="">
            <i class="iconfont iconjingwai"></i>
            <span>境外</span>
          </a>
      </router-link>
  

    </ul>
  </div>
</template>

<style lang="less">
#nav{
  height: 140px;
  margin-top: 10px;
  overflow: hidden;
  ul{
    // padding-top:20px;
    display:flex;
    flex-wrap: wrap;
    li{
      height: 70px;
      flex:1 0 25%;
      a{
        color: #1e1e1e;
        display: flex;
        flex-direction:column;
        text-align:center;
        i{
          font-size: 24px;
        }
      }
      
      
    }
  }
}
</style>