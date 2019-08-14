import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@/pages/demo')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router
