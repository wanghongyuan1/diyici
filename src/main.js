import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElemenrUI from 'element-ui'// 引入模块
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '../style/index.less'// 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(ElemenrUI)// 全局注册
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
