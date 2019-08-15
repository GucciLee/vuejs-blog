// 自定义验证规则
export default {
    //手机号验证
    phone: {
        getMessage: (field, params, data) => '自定义规则测试',
        validate: (value, args) => {
            return false
        }
    },
    unique: {
        getMessage: (field, params, data) => data.message,
        validate: value =>
            new Promise(resolve => {
                if (!1) {
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