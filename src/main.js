import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'common/Plugins/vant'
import 'common/FastClick/fastClick.js'
//组件vant库的引入



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')