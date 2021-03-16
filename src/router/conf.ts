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
    path: '/bank',
    name: 'Bank',
    meta: {
      title: 'menu.bank',
    },
    component: () => import('../views/Bank/index.vue'),
  },
]
