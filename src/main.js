import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'reset-css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'L1jlmjVSVPuvCBAwwidjRDhGrghit0Rk'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
