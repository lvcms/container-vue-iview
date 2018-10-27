import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const state = {
    loginOut:false
}


export default {
    name: 'container',
    state,
    getters,
    actions,
    mutations
}
