import layoutAside from './layout-aside'
import layoutHeader from './layout-header'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册一个全局组件
    Vue.component('layout-header', layoutHeader)
  }
}
