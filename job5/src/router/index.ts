import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/area',
    component:()=>import('../views/area.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
