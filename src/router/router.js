import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index/index.vue'
import Home from '../components/index/home/home.vue'
import Intermediary from '../components/index/home/intermediary.vue'
import Latest_activity from '../components/index/home/latest-activity.vue'
import Advisory from '../components/index/modal/advisory.vue'
import IndexTabsLoading from '../components/index/modal/loading.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index/home' },
    { path: '/index', 
      name: 'Index', 
      component: Index, 
      children: [
        { path: '/index/home', name: 'Home', component: Home },    // 首页
        { path: '/index/loading', name: 'IndexTabsLoading', component: IndexTabsLoading },    // 首页TabsLoading状态
        { path: '/index/intermediary', name: 'Intermediary', component: Intermediary },    // 媒介
        { path: '/index/latestActivity', name: 'Latest_activity', component: Latest_activity },    // 最新活动
        { path: '/index/advisory', name: 'Advisory', component: Advisory }    // 立即咨询
      ]
    },
  ]
})
