<template>
    <div id="detailmain">
        <div class="main-list">
            <span class="list-tiem">{{itemLists.showTime}}</span>
            <span class="list-text">演出时长约120分钟（以现场为准）</span>
        </div>
        <div class="main-address">
            <span class="add-city">{{itemLists.venueCity}} | {{itemLists.venueName}}</span>
            <span class="add-add">{{itemLists.venueName}}</span>
        </div>
        <div class="artist">
            <h2>演出阵容</h2>
            <div class="artist-ar">
                <div class="artist-img">
                    <img :src="itemLists.verticalPic">
                </div>
                <div class="artist-con">
                    <span class="acon-title">
                        <div class="con-name">{{itemLists.cityName}}</div>
                        <b class="con-look">关注</b>
                    </span>
                    <p>{{itemLists.venueName}}</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">
                演出介绍
            </h2>
            <p class="section-introduce">
                {{itemLists.name}}
                <br>
                <br>
                时间:{{itemLists.showTime}}
                <br>
                <br>
                地点:{{itemLists.venueName}}

            </p>
        </div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    props:{
        itemLists:{
        }
    },
    created(){
        console.log(this.itemLists)
    }
}
</script>

<style lang="less">
    #detailmain{
        width: 100%;
        background-color: #f8f8f8;
        .main-list{
            width: 100%;
            height: 70px;
            padding: 15px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: 1px solid #eee; 
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            .list-tiem{
                font-size: 14px;
                color: #000;
                font-weight: 700;
            }
            .list-text{
                font-size: 12px;
                color: #999;
            }
        }
        .main-address{
            width: 100%;
            height: 70px;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color:#fff; 
            margin-bottom: 10px;
            .add-city{
                font-size: 14px;
                color: #000;
                font-weight: 700;
            }
            .add-add{
                font-size: 12px;
                color: #999;
            }
        }
        .artist{
            width: 100%;
            height: 140px;
            box-sizing: border-box;
            padding: 0 15px;
            background: #fff;
            margin-bottom: 10px;
            h2{ 
                font-size: 20px;
                color: #000;
                font-weight: 700;
                padding-top: 15px;
            }
            .artist-ar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .artist-img{
                    width: 70px;
                    height: 70px;
                    position: relative;
                    img{
                        display: block;
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        position: absolute;
                        top: -4px;
                    }
                }
                .artist-con{
                    display: flex;
                    width: 215px;
                    height: 70px;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 15px;
                    .acon-title{
                        width: 215px;
                        height: 25px;
                        display: block;
                        line-height: 25px;
                        box-sizing: border-box;
                        padding-left:10px;
                        .con-name{
                            color: #111;
                            font-size: 14px;
                            font-weight: 500;
                            font-style: normal;
                            float: left;
                        }
                        .con-look{
                            display: block;
                            width: 60px;
                            height: 25px;
                            font-weight: normal;
                            text-align: center;
                            line-height: 25px;
                            border-radius: 12px;
                            color: #ff2d79;
                            background: rgba(255,45,121,.1);
                            font-size: 12px;
                            float: right;
                        }
                    }
                    p{  
                        font-size: 12px;
                        padding-left: 10px;
                        box-sizing: border-box;
                        width: 215px;
                        height: 15px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .section{
            width: 100%;
            // height: 500px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 0 15px 20px;
            .section-title{
                font-size: 20px;
                color: #000;
                font-weight: 700;
                box-sizing: border-box;
                padding: 15px 0;
            }
            .section-introduce{
                color: #888;
                font-size: 12px;
                line-height: 14px;
            }
        }
    }
</style>

