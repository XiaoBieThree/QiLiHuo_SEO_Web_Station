<template>
  <el-row>
    <el-col :span="5">
      <!-- <i class="el-icon-s-unfold"></i> -->
      <h5 class="hb-h5">云市场分类</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#000"
        text-color="#d3dce6"
        active-text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-position"></i>
            <span class="hb-title-span">AI人工智能</span>
          </template>
          <el-menu-item index="1-1">电销机器人</el-menu-item>
          <el-menu-item index="1-2">人机协作系统</el-menu-item>
          <el-menu-item index="1-3">自动寻客系统</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-position"></i>
            <span class="hb-title-span">PASS云销系统</span>
          </template>
          <el-menu-item index="2-1">智能线上客服</el-menu-item>
          <el-menu-item index="2-2">AI加装小程序</el-menu-item>
          <el-menu-item index="2-3">微信机器人</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-position"></i>
            <span class="hb-title-span">搜索云计算</span>
          </template>
          <el-menu-item index="3-1">企力火整站优化</el-menu-item>
          <el-menu-item index="3-2">企力火新站优化</el-menu-item>
          <el-menu-item index="3-3">企力火万词霸屏</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-position"></i>
            <span class="hb-title-span">软件开发服务</span>
          </template>
          <el-menu-item index="4-1">百度/微信小程序建设</el-menu-item>
          <el-menu-item index="4-2">移动应用(app)建设</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="19">
      <div class="nav-image">
        <img src="../../../assets/home/nav-image.png" alt />
      </div>
      <div class="hb-cards">
        <el-card
          class="hb-box-card"
          shadow="hover"
          v-for="(item, index) in hb_box_card"
          :key="index"
        >
          <div class="hb-box-card-f">{{item.title}}</div>
          <div class="hb-box-card-s">{{item.contant}}</div>
          <div class="hb-box-card-t">
            <img src="../../../assets/home/1571905563558.png" />
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import data from "../data.js";
export default {
  data() {
    return {
      hb_box_card: data.hb_box_card,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}

</script>

<style>

</style>