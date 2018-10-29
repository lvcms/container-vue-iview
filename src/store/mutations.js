import * as types from './mutation-types'
export default {
    [types.SET_LOGIN_OUT](state, loginOut) {
        state.loginOut = loginOut
    },
    [types.SET_SIDEBAR](state, {
        sidebar,
        data
    }) {
        state.sidebar = sidebar
        state.data.sidebar = data
    },
}
