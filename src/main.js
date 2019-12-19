import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElemenrUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '../style/index.less'
Vue.use(ElemenrUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
