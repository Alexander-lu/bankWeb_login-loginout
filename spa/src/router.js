import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import balance from './views/balance.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,   // `/login`路径访问Login组件
        },
        {
            path: '/balance',
            name: 'balance',
            component: balance,
        },
        {
            path: '*',
            redirect: '/login'  // 所有路径都重定向到`/login`
        }
    ]
});