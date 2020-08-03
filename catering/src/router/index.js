import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'Login',
        component: resolve => require(['@/components/Login.vue'], resolve)
    }, {
        path: '/home',
        name: 'Heme',
        component: resolve => require(['@/components/Home.vue'], resolve),
        children: [{
            path: '/order',
            name: 'Order',
            component: resolve => require(['@/components/view/Order.vue'], resolve),
        }, {
            path: '/stock',
            name: 'Stock',
            component: resolve => require(['@/components/view/Stock.vue'], resolve),
        }]
    }, {
        path: '*',
        component: resolve => require(['@/components/404.vue'], resolve)
    }]
})