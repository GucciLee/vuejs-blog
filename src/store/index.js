import Vue from 'vue'
import Vuex from 'vuex'
import ls from '@/utils/localStorage'

// 子模块
import user_module from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    // 状态仓库
    state: {
    },
    // 类似于我们的计算属性，可以帮助我们缓存我们的数据，因为我们的 state 是响应式的嘛
    getters: {

    },
    // 更新操作（必须是同步操作）
    mutations: {
    },
    // 异步操作
    actions: {
    },
    // 模块
    modules: {
        USER: user_module,
    }
})