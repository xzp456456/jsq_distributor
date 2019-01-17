import Vue from 'vue'
import Router from 'vue-router'
import announce from '../pages/draw/announce'
import breakdown from '../pages/break/breakdown'
import breakInfo from '../pages/break/breakInfo'
import cashRecord from '../pages/equip/cashRecord'
import charts from '../pages/equip/charts'
import commission from '../pages/draw/commission'
import company from '../pages/equip/company'
import cumulative from '../pages/equip/cumulative'
import deliver from '../pages/equip/deliver'
import details from '../pages/draw/details'
import draw from '../pages/draw/draw';
import equipInfo from '../pages/equip/equipInfo'
import equipList from '../pages/equip/equipList'
import Installed from '../pages/equip/Installed'
import login from '../pages/user/login'
import orderInfo from '../pages/equip/orderInfo'
import outstanding from '../pages/draw/outstanding'
import reset from '../pages/user/reset'
import searchPassword from '../pages/user/searchPassword'
import stock from '../pages/equip/stock'
import team from '../pages/team/team'
import teamInfo from '../pages/team/teamInfo'
import teamOrder from '../pages/team/teamOrder'
import chart from '@/pages/equip/chart'
import myInfo from '@/pages/user/myInfo'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/myInfo',
      component: myInfo,
      name: 'myInfo',
      meta:{
        title:'累计佣金'
      }
    },
    {
      path: '/chart',
      component: chart,
      name: 'chart',
      meta:{
        title:'累计佣金'
      }
    },
    {
      path: '/announce',
      component: announce,
      name: 'announce',
      meta:{
        title:'公告'
      }
    },
    {
      path: '/breakdown',
      component: breakdown,
      name: 'breakdown',
      meta: {
        title: '佣金记录'
      }
    },
    {
      path: '/breakInfo',
      component: breakInfo,
      name: 'breakInfo',
      meta: {
        title: '佣金明细'
      }
    },
    {
      path: '/cashRecord',
      component: cashRecord,
      name: 'cashRecord'
    },
    {
      path: '/charts',
      component: charts,
      name: 'charts'
    },
    {
      path: '/commission',
      component: commission,
      name: 'commission',
      meta:{
        title: '已结金额'
      }
    },
    {
      path: '/',
      component: company,
      name: 'company',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/cumulative',
      component: cumulative,
      name: 'cumulative'
    },
    {
      path: '/deliver',
      component: deliver,
      name: 'deliver',
      meta:{
        title:'发货设置'
      }
    },
    {
      path: '/details',
      component: details,
      name: 'details',
      meta:{
        title:'公告详情'
      }
    },
    {
      path: '/draw',
      component: draw,
      name: 'draw',
      meta:{
        title:'提现'
      }
    },
    {
      path: '/equipInfo',
      component: equipInfo,
      name: 'equipInfo',
      meta:{
        title:'设备详情'
      }
    },
    {
      path: '/equipList',
      component: equipList,
      name: 'equipList',
      meta:{
        title:'设备'
      }
    },
    {
      path: '/Installed',
      component: Installed,
      name: 'Installed',
      meta:{
        title:'累计装机量'
      }
    },
    {
      path: '/login',
      component: login,
      name: 'login',
      meta:{
        title:"登录"
      }
    },
    {
      path: '/orderInfo',
      component: orderInfo,
      name: 'orderInfo',
      meta:{
        title: '未结金额'
      }
    },
    {
      path: '/outstanding',
      component: outstanding,
      name: 'outstanding',
      meta:{
        title: '未结金额'
      }
    },
    {
      path: '/searchPassword',
      component: searchPassword,
      name: 'searchPassword',
      meta:{
        title:'找回密码'
      }
    },
    {
      path: '/stock',
      component: stock,
      name: 'stock',
      meta:{
        title:'我的库存'
      }
    },
    {
      path: '/team',
      component: team,
      name: 'team',
      meta:{
        title:'团队成员'
      }
    },
    {
      path: '/teamInfo',
      component: teamInfo,
      name: 'teamInfo',
      meta:{
        title:'团队详情'
      }
    },
    {
      path: '/teamOrder',
      component: teamOrder,
      name: 'teamOrder',
      meta:{
        title:'团队订单'
      }
    }
  ]
})


