<template>
  <div class="tarbar" v-if="xx">
    <div class="dm-header" v-for="item in items" :key="item.index">
      <div data-v-46533f5f class="dm-field" style="border-bottom: 1px solid rgb(231, 231, 231);">
        <div class="dm-field__text">
          <span class="dm-field__title">{{ item.message }}</span>
        </div>
        <div class="dm-field__value">
          <div data-v-46533f5f class="dm-input">
            <input
              type="text"
              :placeholder="(item.address)"
              class
              data-spm-anchor-id="a2o71.receipt.0.i1"
            >
            <button class="clear" style="display: none;"></button>
          </div>
        </div>
      </div>
    </div>

    <router-link
      to="finishaddress"
      tag="div"
      class="dm-button add-address-btn"
      data-spm-anchor-id="a2o71.receipt.0.i0"
    >确定</router-link>
    <!-- <router-link to="finishaddress" tag='div'  class="dm-button add-address-btn dm-button__primary dm-button__large"
        data-spm-anchor-id="a2o71.receipt.0.i0" >
         + 新增收货地址
    </router-link>-->
    <!---->
  </div>

  <div class="tarbar" v-else>
    <div class="address-box">
      <div data-v-6ac40e55 class="address-item-content">
        <h3 data-v-6ac40e55 class="address-title">
          <span data-v-6ac40e55>王五</span>
          13377914832
          <!---->
        </h3>
        <p data-v-6ac40e55 class="address-detail">山西省 大同市 城区 西花园街道 xxxxx</p>
      </div>
      <div data-v-6ac40e55 class="address-item-operate">
        <div data-v-6ac40e55 class="address-default">
          <div class="dm-radio" data-v-6ac40e55>
            <!---->
            <i class="iconfont icon-moren5"></i>
          </div>设为默认
        </div>
        <div data-v-6ac40e55 class="address-modify">
          <span data-v-6ac40e55 class="address-modify__edit">
            <i data-v-6ac40e55 class="iconfont icon-edit"></i>编辑
          </span>
          <span data-v-6ac40e55>
            <i data-v-6ac40e55 class="iconfont icon-delete"></i>删除
          </span>
        </div>
      </div>
    </div>
    <router-link
      to="finishaddress"
      tag="div"
      class="dm-button add-address-btn"
      data-spm-anchor-id="a2o71.receipt.0.i0"
    >+添加收货地址</router-link>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data() {
    return {
      items: [
        { message: "收货人", address: "请填写收货人姓名" },
        { message: "联系人", address: "请填写收货人手机号" },
        { message: "所在区域", address: "请选择区域" },
        { message: "详细地址", address: "请填写详细收货地址" }
      ],
      xx: false
    };
  },

  created() {
    window.console.log("创建之前");
    Axios.get(
      "/api/ptapi/getScenesList?theme=q" // {
      //params: {
      //theme: 'quality',
      // tab: 'all',
      //ci: 30,
      //limit: 12
      // }
    ).then(res => {
      window.console.log(res.data);
    });
  }
};
</script>


<style lang="less">
.tarbar {
  height: 100%;
  .address-box {
    padding: 10px 20px 10px 20px;
    background: #ffffff;
    .address-item-content {
      width: 100%;
      background: #ffffff;
      border-bottom: 1px #000 solid;
      padding-bottom: 10px;
    }
    .address-item-operate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      width: 100%;
      height: 40px;
      .address-default {
        display: flex;

        i {
          font-size: 14px;
        }
      }
    }
  }

  .dm-header {
    height: 41px;
    width: 100%;

    .dm-field {
      height: 41px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      padding: 15px;
      input {
        font-size: 0.4rem;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        text-align: right;
        border: 0;
        outline: none;
      }
    }
  }
  .dm-button {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 41px;
    width: 100%;
    background-image: linear-gradient(90deg, #ff4aae, #ff1268);
    color: antiquewhite;
  }
}
</style>

