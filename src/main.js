import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'common/Plugins/vant'
import less from 'less'
//组件vant库的引入
//加载事件总线,用于全局事件监听
Vue.prototype.$bus = new Vue()

//less引用
Vue.use(less)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')