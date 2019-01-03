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
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/announce',
      component: announce,
      name: 'announce',
      meta: {
        title: '首页入口'
      }
    },
    {
      path: '/breakdown',
      component: breakdown,
      name: 'breakdown'
    },
    {
      path: '/breakInfo',
      component: breakInfo,
      name: 'breakInfo'
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
      name: 'commission'
    },
    {
      path: '/',
      component: company,
      name: 'company'
    },
    {
      path: '/cumulative',
      component: cumulative,
      name: 'cumulative'
    },
    {
      path: '/deliver',
      component: deliver,
      name: 'deliver'
    },
    {
      path: '/details',
      component: details,
      name: 'details'
    },
    {
      path: '/draw',
      component: draw,
      name: 'draw'
    },
    {
      path: '/equipInfo',
      component: equipInfo,
      name: 'equipInfo'
    },
    {
      path: '/equipList',
      component: equipList,
      name: 'equipList'
    },
    {
      path: '/Installed',
      component: Installed,
      name: 'Installed'
    },
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/orderInfo',
      component: orderInfo,
      name: 'orderInfo'
    },
    {
      path: '/outstanding',
      component: outstanding,
      name: 'outstanding'
    },
    {
      path: '/reset',
      component: reset,
      name: 'reset'
    },
    {
      path: '/reset',
      component: reset,
      name: 'reset'
    },
    {
      path: '/searchPassword',
      component: searchPassword,
      name: 'searchPassword'
    },
    {
      path: '/stock',
      component: stock,
      name: 'stock'
    },
    {
      path: '/team',
      component: team,
      name: 'team'
    },
    {
      path: '/teamInfo',
      component: teamInfo,
      name: 'teamInfo'
    },
    {
      path: '/teamOrder',
      component: teamOrder,
      name: 'teamOrder'
    }
  ]
})


