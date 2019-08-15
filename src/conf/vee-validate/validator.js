import Vue from 'vue'
import VeeValidate, {Validator}  from 'vee-validate';
import Langule from './langule';
import Config from './config';

// 表单验证
Vue.use(VeeValidate, Config);

// 自定义验证规则
const customRules = {
    //手机号验证
    isMobile: {
        getMessage: (field, params, data) => '格式不正确',
        validate: (value, args) => {
            return false
        }
    }
};
Validator.extend('liguanjie', customRules.isMobile);

// 自定义验证消息
Validator.localize({zh_CN: Langule.zh_CN});