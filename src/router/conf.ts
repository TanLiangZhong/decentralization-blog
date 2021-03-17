export default [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'menu.home',
        },
        component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/music',
        name: 'Music',
        meta: {
            title: 'menu.music',
        },
        component: () => import('../views/Music/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'menu.about',
        },
        component: () => import('../views/About/index.vue'),
    },
    {
        path: '/story',
        name: 'Story',
        meta: {
            title: 'menu.story',
            hidden: true
        },
        component: () => import('../views/Story/index.vue'),
    },
    {
        path: '/published',
        name: 'Published',
        meta: {
            title: 'menu.published',
            hidden: true
        },
        component: () => import('../views/Published/index.vue'),
    },
]
