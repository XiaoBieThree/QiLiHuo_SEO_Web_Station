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
      <div class="hb-top">
        <el-tabs v-model="activeName" @tab-click="tabsClick">
          <!-- home-body 简写hb -->
          <el-tab-pane label="首页" name="first" class="hb-tabs">
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
                  <img src="../../assets/home/nav-image.png" alt />
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
                      <img src="../../assets/home/1571905563558.png" />
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="hb-first-application_center-title">
                  <p>企力火应用中心</p>
                </div>
                <div class="hb-f-application_center-left">
                  <div>
                    <span>买软件，选服务</span>
                    <span>就上企力火云市场</span>
                    <span>智能线上客服，自动拓客机器人等</span>
                    <span>多数软件免费试用</span>
                    <span>千套H5，微信小程序，模板网站（响应式）应有尽有，放心选择。</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="hb-f-application_center-right">
                  <el-row v-for="index in 3" :key="index" class="hb-f-a-right-row">
                    <el-col :span="8" v-for="(item, index) in 3" :key="index">
                      <div class="hb-f-a-right-col"></div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="最新活动" name="second" class="hb-tabs">
            <router-view></router-view>
          </el-tab-pane>
          <el-tab-pane label="媒介" name="third" class="hb-tabs"></el-tab-pane>
          <el-tab-pane label="运维开发" name="fourth" class="hb-tabs">运维开发</el-tab-pane>
          <el-tab-pane label="云市场" name="fifth" class="hb-tabs">云市场</el-tab-pane>
          <el-tab-pane label="定价" name="sixth" class="hb-tabs">定价</el-tab-pane>
          <el-tab-pane label="支持与服务" name="seventh" class="hb-tabs">支持与服务</el-tab-pane>
          <el-tab-pane label="招商加盟" name="eighth" class="hb-tabs">招商加盟</el-tab-pane>
          <el-tab-pane label="众柴学院" name="nineth" class="hb-tabs">众柴学院</el-tab-pane>
          <el-tab-pane label="了解企力火" name="tenth" class="hb-tabs">了解企力火</el-tab-pane>
        </el-tabs>
      </div>
      <div class="hb-bottom">
        <div class="case-content-bg case-content-info">
          <div class="case-box">
            <h3 class="case-box-title">
              <em>企力火应用中心</em>
              <span>各行各业的合作伙伴使用大数据分析产品</span>
            </h3>
            <div class="case-wrapper clearfix" v-for="index in 2" :key="index">
              <div class="case-item" v-for="(item, index) in 4" :key="index">
                <div class="case-item-bg" :class="'case-item-bg' + (index + 1)"></div>
                <div class="case-item-title">Heading information {{index + 1}}</div>
                <div
                  class="case-item-text"
                >应用BML做商户点击率的预估，提升了模型训练效率，基于海量数据做到了模型的每天更新。上线后转化率比之前有明显提升。</div>
                <div class="case-item-doc">
                  <p>使用产品</p>
                  <p>
                    <!-- <a href="#">查看详情</a> -->
                    <!-- <a href="#">立即咨询</a> -->
                    <el-badge value="hot" class="item">
                      <el-button size="small">查看详情</el-button>
                    </el-badge>
                    <el-badge value="有惊喜" class="item">
                      <el-button size="small">立即咨询</el-button>
                    </el-badge>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-footer">
      <div class="hf-first">
        <div style="text-align: center;">
          <div class="hf-first-1">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">公告</li>
              <li v-for="(item, index) in notice" :key="index">
                <a :href="item.href" target="_blank">[{{item.dataTime}}]&nbsp;{{item.contant}}</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-2">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">帮助文档</li>
              <li v-for="(item, index) in help_document" :key="index">
                <a :href="item.href" target="_blank">{{item.contant}}</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-3">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">热门产品</li>
              <li v-for="(item, index) in popular_product" :key="index">
                <a :href="item.href" target="_blank">{{item.contant}}</a>
              </li>
            </ul>
          </div>
          <div class="hf-first-4">
            <ul>
              <li style="font-size: 16px;color: white;margin-bottom:20px;">联系我们</li>
              <li v-for="(item, index) in contact_us" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="hf-first-5">
            <ul>
              <li style="font-size: 18px;color: white;margin-bottom:20px;">4008-777-818转3</li>
              <li>24小时售前咨询</li>
              <li style="height: 45px;margin-top:50px;">
                <img src="../../assets/home/wx_1.png" style="height: 45px;" />
                <img src="../../assets/home/app-store.png" style="height: 40px;" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hf-second">
        <ul>
          <li>
            <a href="javascript:;">友情链接：</a>
          </li>
          <li v-for="(item, index) in blogroll" :key="index">
            <a :href="item.href">{{item.contant}}</a>
          </li>
        </ul>
      </div>
      <div class="hf-end">© {{this.year}} 上海众柴软件科技有限公司 使用百度前必读 京ICP证030173号</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import data from "./data.js";
export default {
  data() {
    return {
      input: "",
      activeName: "first",
      year: moment().format("YYYY"),
      notice: data.notice,
      help_document: data.help_document,
      popular_product: data.popular_product,
      contact_us: data.contact_us,
      blogroll: data.blogroll,
      hb_box_card: data.hb_box_card
    };
  },
  methods: {
    tabsClick(tab, event) {
      console.log(tab, event);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='less'>
@import "./index.less";
</style>