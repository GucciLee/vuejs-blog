import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import VeeValidateZh_CN from '@/conf/vee-validate/zh_CN';

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// 自定义指令
import './directives'
// 自定义组件
import './components'

// 表单验证
VeeValidate.Validator.extend('liguanjie', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
VeeValidate.Validator.localize({zh_CN: VeeValidateZh_CN});
Vue.use(VeeValidate, {
  aria: true,
  locale: 'zh_CN',
});

// 创建一个新的 Vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
