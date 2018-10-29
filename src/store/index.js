import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const state = {
    loginOut:false,
    sidebar:false,
    data:{
        sidebar:[]
    }
}


export default {
    name: 'container',
    state,
    getters,
    actions,
    mutations
}
