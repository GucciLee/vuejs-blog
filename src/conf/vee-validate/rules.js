import axios from "axios";
// 自定义验证规则
export default {
    //手机号验证
    phone: {
        getMessage: (field, params, data) => '无效的电话号码',
        validate: (value, args) => {
            if (value.length != 11){return false;}
            return /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/.test(value)
        }
    },
    // 唯一性验证
    unique: {
        getMessage: (field, params, data) => data.message,
        validate: (value, args) => {
            let url = args[0];
            let parasm = JSON.parse(args[1]);
            /**
             * response：
             * { "message": "该邮箱已经存在 已经存在", "valid": false }
             */
            return axios.post(url, parasm).then((response)=> {
                return {
                    valid: response.data.valid,
                    data: {
                        message: response.data.message
                    }
                };
            })
        }
    }
};