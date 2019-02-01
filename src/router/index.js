import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/myInfo',
      component: resolve=>require(['@/pages/user/myInfo'],resolve),
      name: 'myInfo',
      meta:{
        title:'经销商个人信息'
      }
    },
    {
      path: '/chart',
      component: resolve=>require(['@/pages/equip/chart'],resolve),
      name: 'chart',
      meta:{
        title:'累计佣金'
      }
    },
    {
      path: '/announce',
      component:  resolve=>require(['../pages/draw/announce'],resolve),
      name: 'announce',
      meta:{
        title:'公告'
      }
    },
    {
      path: '/breakdown',
      component: resolve=>require(['../pages/break/breakdown'],resolve),
      name: 'breakdown',
      meta: {
        title: '佣金记录'
      }
    },
    {
      path: '/breakInfo',
      component: resolve=>require(['../pages/break/breakInfo'],resolve),
      name: 'breakInfo',
      meta: {
        title: '佣金明细'
      }
    },
    {
      path: '/cashRecord',
      component: resolve=>require(['../pages/equip/cashRecord'],resolve),
      name: 'cashRecord'
    },
    {
      path: '/charts',
      component: resolve=>require(['../pages/equip/charts'],resolve),
      name: 'charts'
    },
    {
      path: '/commission',
      component: resolve=>require(['../pages/draw/commission'],resolve),
      name: 'commission',
      meta:{
        title: '已结金额'
      }
    },
    {
      path: '/',
      component: resolve=>require(['../pages/equip/company'],resolve),
      name: 'company',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/cumulative',
      component: resolve=>require(['../pages/equip/cumulative'],resolve),
      name: 'cumulative'
    },
    {
      path: '/deliver',
      component: resolve=>require(['../pages/equip/deliver'],resolve),
      name: 'deliver',
      meta:{
        title:'发货设置'
      }
    },
    {
      path: '/details',
      component: resolve=>require(['../pages/draw/details'],resolve),
      name: 'details',
      meta:{
        title:'公告详情'
      }
    },
    {
      path: '/draw',
      component: resolve=>require(['../pages/draw/draw'],resolve),
      name: 'draw',
      meta:{
        title:'提现'
      }
    },
    {
      path: '/equipInfo',
      component: resolve=>require(['../pages/equip/equipInfo'],resolve),
      name: 'equipInfo',
      meta:{
        title:'设备详情'
      }
    },
    {
      path: '/equipList',
      component:resolve=>require(['../pages/equip/equipList'],resolve),
      name: 'equipList',
      meta:{
        title:'设备'
      }
    },
    {
      path: '/Installed',
      component: resolve=>require(['../pages/equip/Installed'],resolve),
      name: 'Installed',
      meta:{
        title:'累计装机量'
      }
    },
    {
      path: '/login',
      component: resolve=>require(['../pages/user/login'],resolve),
      name: 'login',
      meta:{
        title:"登录"
      }
    },
    {
      path: '/orderInfo',
      component: resolve=>require(['../pages/equip/orderInfo'],resolve),
      name: 'orderInfo',
      meta:{
        title: '订单详情'
      }
    },
    {
      path: '/outstanding',
      component: resolve=>require(['../pages/draw/outstanding'],resolve),
      name: 'outstanding',
      meta:{
        title: '未结金额'
      }
    },
    {
      path: '/searchPassword',
      component: resolve=>require(['../pages/user/searchPassword'],resolve),
      name: 'searchPassword',
      meta:{
        title:'找回密码'
      }
    },
    {
      path: '/stock',
      component: resolve=>require(['../pages/equip/stock'],resolve),
      name: 'stock',
      meta:{
        title:'我的库存'
      }
    },
    {
      path: '/team',
      component: resolve=>require(['../pages/team/team'],resolve),
      name: 'team',
      meta:{
        title:'团队成员'
      }
    },
    {
      path: '/teamInfo',
      component: resolve=>require(['../pages/team/teamInfo'],resolve),
      name: 'teamInfo',
      meta:{
        title:'团队详情'
      }
    },
    {
      path: '/teamOrder',
      component: resolve=>require(['../pages/team/teamOrder'],resolve),
      name: 'teamOrder',
      meta:{
        title:'团队订单'
      }
    }
  ]
})


