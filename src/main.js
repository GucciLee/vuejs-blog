import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义指令
import './directives'
// 自定义组件
import './components'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// 创建一个新的 Vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
