<template>
  <div>
    <h1>我是详情页</h1>
    <div>
      <p>ID:{{filmInfo.id}}</p>
      <p>片名:{{filmInfo.name}}</p>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
const $rouT = {
  name:'mydetail',
  data() {
    return {
      filmInfo: {}
    };
  },
  //重新触发请求在在详情页通过动态参数跳转(方法1：监听)
  // watch: {
  //   '$route'(){
  //     this.getData()
  //   }
  // },
  methods: {
    getData() {
      Axios.get("json/dateli.json").then(res => {
        var data = res.data;
        window.console.log(data)
        //拿到url里的：id
        var tmp = data.find(item => {
        window.console.log(item.id)
        window.console.log(this.$route.params.id)
          return item.id===Number(this.$route.params.id);
        });
        this.filmInfo=tmp;
      });
    }
  },
created() {
  this.getData()
},
  beforeRouteEnter(to, from, next) {
    // ...
    window.console.log("进来之前");
    next();
  },
  //重新触发请求在在详情页通过动态参数跳转(方法2:复用)
  beforeRouteUpdate(to, from, next) {
  
      this.getData()
    
    window.console.log("组件被复用le");
    next()
  },

  beforeRouteLeave(to, from, next) {
    // ...
    window.console.log("离开之前");

    next();
  }
};
export default $rouT;
</script>
