// 导入axios实例文件中方法
import {get, post, put, deletes} from './axios.js' ;

// 获取项目api请求地址
let bsae_api = 'http://localhost:8888/v1'

// 根据id获取用户信息
export default {
    // 列表页
    Index(){
        return get(`${bsae_api}/users`);
    },
    // 创建
    Create(id) {
        return get(`${bsae_api}/users/create`);
    },
    // 保存
    Store(){
        return post(`${bsae_api}/users`);
    },
    // 详情
    Show(){
        return get(`${bsae_api}/users/${id}`);
    },
    // 编辑
    Edit(){
        return get(`${bsae_api}/users/${id}/edit`);
    },
    // 更新
    Update(){
        return put(`${bsae_api}/users/${id}`);
    },
    // 删除
    Destroy(){
        return deletes(`${bsae_api}/users/${id}`);
    }
}