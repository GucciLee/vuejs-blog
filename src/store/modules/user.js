import ls from '@/utils/localStorage'

export default {
    namespaced: true,

    state: {
        infos: ls.getItem('USER_infos')
    },
    getters: {

    },
    mutations: {
        update_user(state, user) {
            state.infos = user
            ls.setItem('USER_infos', user)
        }
    },
    actions: {
        login({ commit }, user) {
            // 登录时有传用户信息，就更新下用户信息
            if (user) commit('update_user', user)
            // router.push('/')
        }
    }
}