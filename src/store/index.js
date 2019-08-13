import Vue from 'vue'
import Vuex from 'vuex'
import ls from '@/utils/localStorage'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: ls.getItem('user')
    },
    mutations: {
        UPDATE_USER(state, user) {
            state.user = user
            ls.setItem('user', user)
        }
    },
    actions: {
        login({ commit }, user) {
            // 登录时有传用户信息，就更新下用户信息
            if (user) commit('UPDATE_USER', user)
            // router.push('/')
        }
    }
})
