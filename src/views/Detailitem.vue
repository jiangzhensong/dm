<template>
    <div id="detail" :style="styleObjects">
        <div class="detail-main">
            <div class="main-title">
                <div class="title-img"><img :src="itemList.verticalPic"/></div>
                <div class="title-content">
                    <h2>
                        {{itemList.name}}
                    </h2>
                    <span class="price">¥{{itemList.priceStr}}</span>
                </div>
            </div>
            <Detailmain :itemLists="itemList"></Detailmain>
        </div>
        <div class="detail-footer">
            <div class="footer-love">
                <router-link class="index" to="/home" >大麦首页</router-link>
                <span class="love">关注</span>
            </div>
            <div class="footer-buy">立即购买</div>
        </div>
    </div>
</template>

<script>
import Detailmain from '../components/Detailcom/Detailmain.vue'
import Axios from 'axios'
export default {
    components:{
        Detailmain,
    },
    data(){
        return{
            itemList:[],
            queryId:this.$route.path.substring(12),
        }
    },
    computed:{
        styleObjects(){
            return {
                background: 'url('+this.itemList.verticalPic+')'
            }
        }
    },
    methods:{
        getIditem(){
            let theList = this.$route.query.id;
            Axios.get('/json/'+theList+'.json').then(res=>{
                let data = res.data;
                let thatList = [];
                thatList=data.data.projectInfo;
                for(let i = 0;i<thatList.length;i++){
                    if(thatList[i].id==this.queryId){
                        this.itemList=thatList[i]
                    }
                }
                // console.log(this.itemList)
                // console.log(this.queryId)
                // console.log(theList)
            })
        }
    },
    created(){
        this.getIditem();
    }
}
</script>

<style lang="less">
    #detail{
        width: 100%;
        // height: 1000px;
        background:  no-repeat;
        background-size: 100%; 
        .detail-main{
            width: 100%;
            // background: red;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            // bottom: 50px;
            padding-bottom: 35px;
            // background: #ffffff;
            box-sizing: border-box; 
            .main-title{
                width: 100%;
                height: 178px;
                background-color: rgba(255,255,255,0.5);
                padding: 20px 15px;
                box-sizing: border-box; 
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #000;
                .title-img{
                    img{
                        display: block;
                        width: 100px;
                        height: 135px;
                    }
                }
                .title-content{
                    width: 175px;
                    height: 135px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h2{
                        font-weight: 700;
                        font-size: 16px;
                        letter-spacing: 0;
                        line-height: 20px;
                        text-align: justify;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        color: #000;
                    }
                    .price{
                        font-size: 14px;
                        line-height: 16px;
                        color: red;
                    }
                }
            }
        }
        .detail-footer{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 44px;
            // background: blue;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .footer-love{
                width: 100px;
                height: 44px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                .index{
                    display: block;
                    width: 50px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #eee; 
                    font-size: 12px;
                    color: #000;
                }
                .love{
                    display: block;
                    width: 50px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    box-sizing: border-box;
                    border: 1px solid #eee; 
                    font-size: 12px;
                }
            }
            .footer-buy{
                width: 220px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                background-color:  #ff407b;
                color: #fff;
                font-size: 12px;

            }
        }
    }
</style>
