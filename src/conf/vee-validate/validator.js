import Vue from 'vue'
import VeeValidate, {Validator}  from 'vee-validate';
import Langule from './langule';
import Config from './config';

// 表单验证
Vue.use(VeeValidate, Config);

// 自定义验证规则
const customRules = {
    //手机号验证
    phone: {
        getMessage: (field, params, data) => '格式不正确',
        validate: (value, args) => {
            return false
        }
    },
    unique: {
        getMessage: (field, params, data) => data.message,
        validate: value =>
        new Promise(resolve => {
            if (0) {
                return resolve({
                    valid: true
                });
            }

            return resolve({
                valid: false,
                data: {
                    message: `${value} 已经存在.`
                }
            });
        }),
    }
};
Validator.extend('phone', customRules.phone);
Validator.extend('unique', customRules.unique);

// 自定义验证消息
Validator.localize({zh_CN: Langule.zh_CN});