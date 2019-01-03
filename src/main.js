// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';
import layer from 'layer-mobile'

Vue.prototype.$layer = layer
Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
