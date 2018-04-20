// import Layout from './components/Layout.vue'
import Login from './components/login.vue'
import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)
const components = [
  // Layout,
  Login
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
