import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'
import Home from '../components/index/home/home.vue'
import Intermediary from '../components/index/home/intermediary.vue'
import Latest_activity from '../components/index/home/latest-activity.vue'

import Advisory from '../components/index/modal/advisory.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', 
      name: 'Index', 
      component: Index, 
      children: [
        { path: '/home', name: 'Home', component: Home },    // 首页
        { path: '/intermediary', name: 'Intermediary', component: Intermediary },    // 媒介
        { path: '/latestActivity', name: 'Latest_activity', component: Latest_activity },    // 最新活动
        { path: '/advisory', name: 'Advisory', component: Advisory }    // 立即咨询

      ]
    }
  ]
})
