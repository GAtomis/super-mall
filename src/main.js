import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'common/Plugins/vant'
//组件vant库的引入
//加载事件总线,用于全局事件监听
Vue.prototype.$bus = new Vue()


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')