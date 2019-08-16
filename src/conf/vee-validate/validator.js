import Vue from 'vue'
import VeeValidate, {Validator}  from 'vee-validate';
import Langule from './langule';
import Config from './config';
import Rules from './rules'

// 表单验证
// 使用案例参考：
// vuejs-blog/src/components/vee-validate/test.vue
Vue.use(VeeValidate, Config);

Validator.extend('phone', Rules.phone);
Validator.extend('unique', Rules.unique);

// 自定义验证消息
Validator.localize({zh_CN: Langule.zh_CN});