import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'

// 全量引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// 封装Axios
import { getRequest, postRequest, multipleRequest } from './axios/http'
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.multipleRequest = multipleRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
