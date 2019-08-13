import axios from 'axios'
import router from '@/router';

// 创建axios实例
const service = axios.create({
    timeout: 30000
})

// 添加request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

// 添加respone拦截器
service.interceptors.response.use(
    response => {
        let res={};
        res.status=response.status
        res.data=response.data;
        return res;
    },
    error => {
        if(error.response && error.response.status == 404){
            router.push('/blank.vue')
        }
        return Promise.reject(error.response)
    }
)

export default {
    service,
    get(url, params = {}) {
        params.t = new Date().getTime();
        return service({
            url: url,
            method: 'get',
            headers: {
            },
            params
        })
    },
    post(url, data = {}) {
        let sendObject={
            url: url,
            method: 'post',
            headers: {
                'Content-Type':'application/json;charset=UTF-8'
            },
            data:data
        };
        sendObject.data=JSON.stringify(data);
        return service(sendObject)
    },
    put(url,data = {}){
        return service({
            url: url,
            method: 'put',
            headers: {
                'Content-Type':'application/json;charset=UTF-8'
            },
            data:JSON.stringify(data)
        })
    },
    deletes(url){
        return service({
            url: url,
            method: 'delete',
            headers: {}
        })
    },
}