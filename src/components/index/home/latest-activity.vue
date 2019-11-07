<template>
  <!-- home-body-latest-activity 简写 hb-la -->
  <div class="hb-la">
    <!-- nav图片 -->
    <div id="hb-la-top">
      <div class="hb-la-top-title">
        最新活动
      </div>
      <div class="hb-la-top-contant">
        要想企业火，必上企力火，云市场特惠重磅来袭
      </div>
    </div>
    <!--  -->
    <div id="hb-la-buttom">
      <el-tabs v-model="homeActiveName" @tab-click="homeHandleClick">
        <el-tab-pane label="师徒帮带" name="first">
          <el-card class="box-card" v-for="(item, index) in latest_activity_card" :key="index">
            <div class="hb-la-bottom-card_title">
              {{item.title}}
            </div>
            <div class="hb-la-bottom-card_contant">
              {{item.contant}}
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="本月特惠" name="second">本月特惠</el-tab-pane>
        <el-tab-pane label="来访沙龙" name="third">来访沙龙</el-tab-pane>
        <el-tab-pane label="新品发布" name="fourth">新品发布</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
import data from "../data.js";
export default {
  data() {
    return {
      homeActiveName: 'first',
      latest_activity_card: data.latest_activity_card
    }
  },
  methods: {
    homeHandleClick() {

    }
  }
}

</script>

<style lang="less">
  #hb-la-top {
    width: 100vw;
    height: 445px;
    background: url('../../../assets/home/pic1_1.png') no-repeat;
     >.hb-la-top-title {
      font-size: 28px;
      letter-spacing:3px;
      margin-left: 270px;
      padding-top: 60px;
      text-align: left;
    }
    >.hb-la-top-contant {
      font-size: 12px;
      margin-left: 250px;
      padding-top: 10px;
      text-align: left;
    }
  }
  #hb-la-buttom {
    .el-tabs__nav-scroll {
      padding-left: 0;
      .el-tabs__nav {
        transform: translateX(-50%) !important;
        margin: 0 auto;
        position: relative;
        left: 50%;
      }
    }
    .box-card {
      float: left;
      margin: 20px 24px 0 25px;
      width: 300px;
      height: 195px;
      border-radius: 5px 5px 0 0;
      border: none;
      text-align: center;
      .el-card__body {
        padding: 0;
        .hb-la-bottom-card_title {
          height: 55px;
          background-color: #ff996a;
          color: white;
          font-size: 22px;
          padding-top: 15px;
        }
        .hb-la-bottom-card_contant {
          height: 195px - 55px;
          border: 1px solid rgb(238, 236, 236);
          border-top: none;
          box-sizing: border-box;
          border-radius: 0 0 5px 5px;
          color: #666666;
          font-size: 14px;
          display: inline-block;
          padding: 40px 25px 0;
        }
      }
    }
  }
</style>