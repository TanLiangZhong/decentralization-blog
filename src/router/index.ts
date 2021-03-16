import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import conf from './conf'

/**
 * 路由配置
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'BaseLayout',
    redirect: '/',
    component: () => import('../layout/BaseLayout.vue'),
    children: conf,
  },
  //...
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
