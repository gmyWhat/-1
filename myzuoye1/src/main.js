import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
    //将axios添加到原型方法上
Vue.prototype.$http = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')