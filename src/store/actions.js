import * as types from './mutation-types'
/**
 *[loginOut 退出]
 * @param    {[type]}                 mainData       [数据]
 */
export const loginOut = ({
    commit,
    state
}) => {
    localStorage.removeItem('system:token')
    window.router.push(window.config.package + '/login')
    commit(types.SET_LOGIN_OUT, !state.loginOut)
}
