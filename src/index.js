import store from './store'

import Layout from './components/Layout.vue'
import Login from './components/Login.vue'
import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)
const components = [
  Layout,
  Login
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
// 加载 vuex 配置
install.store = store

export default install
