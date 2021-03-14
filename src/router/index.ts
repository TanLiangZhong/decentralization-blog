import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

/**
 * 路由配置
 */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'BaseLayout',
        redirect: '/',
        component: () => import('../layout/BaseLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                meta: {
                    title: 'Home'
                },
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/bank',
                name: 'Bank',
                meta: {
                    title: 'Bank'
                },
                component: () => import('../views/Bank/index.vue')
            },
        ]
    },
    //...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
