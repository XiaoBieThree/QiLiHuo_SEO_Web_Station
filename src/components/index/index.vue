<template>
  <div id="out-side">
    <!-- home 简写h -->
    <!-- 例：home-header简写成h-header, 下同 -->
    <div class="h-header">
      <el-row :gutter="20" style="height:100px">
        <el-col :span="4">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="5" class="hh-col2">
          <div class="grid-content bg-purple" style="width: 240px">图片</div>
        </el-col>
        <el-col :span="12" class="hh-col3">
          <div class="grid-content">
            <el-row>
              <el-col :span="16">
                <div class="grid-content">
                  <el-input
                    placeholder="请在此输入您需要的服务......"
                    prefix-icon="el-icon-search"
                    v-model="input"
                    clearable
                    class="hh-input"
                  ></el-input>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <el-button type="primary" class="hh-button" style="left:0">搜索</el-button>
                  <el-button type="primary" class="hh-button">登录</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="hh-little_word">微商城 人机协作 机器人 APP开发 小源宝</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </div>
    <div class="h-body">
      <el-tabs v-model="activeName" @tab-click="tabsClick">
        <!-- home-body 简写hb -->
        <el-tab-pane label="首页" name="first" class="hb-tabs">首页</el-tab-pane>
        <el-tab-pane label="最新活动" name="second" class="hb-tabs">
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane label="媒介" name="third" class="hb-tabs">媒介</el-tab-pane>
        <el-tab-pane label="运维开发" name="fourth" class="hb-tabs">运维开发</el-tab-pane>
        <el-tab-pane label="云市场" name="fifth" class="hb-tabs">云市场</el-tab-pane>
        <el-tab-pane label="定价" name="sixth" class="hb-tabs">定价</el-tab-pane>
        <el-tab-pane label="支持与服务" name="seventh" class="hb-tabs">支持与服务</el-tab-pane>
        <el-tab-pane label="招商加盟" name="eighth" class="hb-tabs">招商加盟</el-tab-pane>
        <el-tab-pane label="众柴学院" name="nineth" class="hb-tabs">众柴学院</el-tab-pane>
        <el-tab-pane label="了解企力火" name="tenth" class="hb-tabs">了解企力火</el-tab-pane>
      </el-tabs>
      <!-- <router-view /> -->
      <!-- 云市场分类
              AI人工智能
              电销机器人
              人机协作系统
              自动寻客系统
           
           PASS云销系统
              智能线上客服
              AI加装小程序
              微信机器人
           
           搜索云计算
              企力火整站优化
              企力火新站优化
              企力火万词霸屏
           
           软件开发服务
              百度/微信小程序建设
              移动应用(app)建设
      商城开发建设-->
    </div>
    <div class="h-footer">
      <div class="hf-first">
        <div style="text-align: center;">
          <div class="hf-first-1">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">公告</li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=15"
                  target="_blank"
                >[2019-10-16]&nbsp;新功能发布</a>
              </li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=16"
                  target="_blank"
                >[2019-10-16]&nbsp;10.15企力火云市场最新资讯</a>
              </li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=17"
                  target="_blank"
                >[2019-10-16]&nbsp;Paas云销系统来袭，颠覆传统营销</a>
              </li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=18"
                  target="_blank"
                >[2019-10-16]&nbsp;VR商务营销手机新的裂变凸点</a>
              </li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=19"
                  target="_blank"
                >[2019-10-16]&nbsp;业务合伙人须知，亲启</a>
              </li>
              <li>
                <a
                  href="http://www.qlhseo.com:80/getDocDetail?nid=20"
                  target="_blank"
                >[2019-10-16]&nbsp;欢迎加入众柴企力火</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-2">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">帮助文档</li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=22" target="_blank">产品定价</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=23" target="_blank">备案帮助</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=24" target="_blank">入门指南</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=25" target="_blank">产品文档</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=26" target="_blank">开发者资源</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/getDocDetail?nid=27" target="_blank">财务相关</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-3">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">热门产品</li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=4" target="_blank">微商城</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=5" target="_blank">人机协作机器人</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=6" target="_blank">APP开发</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=7" target="_blank">小源宝</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=8" target="_blank">人机协作机器人</a>
              </li>

              <li>
                <a href="http://www.qlhseo.com:80/product_detail?id=9" target="_blank">霸屏推广</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-4">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">联系我们</li>
              <li>客服电话4008-777-818转3</li>
                                      <li>售前电话4008-777-818转1</li>
              <li>售后QQ4008-777-818转2</li>
              <li>备案帮助4008-777-818转3</li>
              <li>商务合作18321567269</li>
              <li>违规投诉18321567269</li>
            </ul>
          </div>
          <div class="hf-first-5">
            <ul>
              <li style="font-size: 18px;color: white;margin-bottom:20px;">4008-777-818转3</li>
              <li>24小时售前咨询</li>
              <li style="height: 45px;margin-top:50px;">
                <img src="http://www.qlhseo.com:80/image/part9_wx_1.png" style="height: 45px;" />
                <img src="http://www.qlhseo.com:80/image/part9_app-store.png" style="height: 40px;" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hf-second">
        <ul>
          <li><a href="javascript:;">友情链接：</a></li>
          <li><a href="javascript:;">网易云</a></li>
          <li><a href="javascript:;">天猫</a></li>
          <li><a href="javascript:;">百度</a></li>
          <li><a href="javascript:;">京东</a></li>
          <li><a href="javascript:;">今日头条</a></li>
          <li><a href="javascript:;">新浪</a></li>
          <li><a href="javascript:;">腾讯云</a></li>
        </ul>
      </div>
      <div class="hf-end">
        © {{this.year}} 上海众柴软件科技有限公司 使用百度前必读 京ICP证030173号
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      input: "",
      activeName: "second",
      year: moment().format("YYYY")
    };
  },
  methods: {
    tabsClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang='less'>
  @import "./index.less"; 
</style>