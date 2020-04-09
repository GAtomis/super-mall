import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: () =>
            import ('views/Home/Home')
    },
    {
        path: '/category',
        name: 'Category',
        component: () =>
            import ('views/Category/Category')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('views/About/About')
    },
    {
        path: '/own',
        name: 'Own',
        component: () =>
            import ('views/Own/Own')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () =>
            import ('views/Detail/Detail')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router