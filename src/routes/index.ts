import { createRouter, createWebHashHistory } from 'vue-router';

const index = () => import('../views/Index.vue');
const about = () => import('../views/About.vue');

const routes = [
    {
        path: '/',
        name: 'Index',
        component: index,
    },
    {
        path: '/about',
        name: 'About',
        component: about,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    strict: true,
});

export default router;
