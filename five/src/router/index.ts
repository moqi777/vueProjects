import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  //后台管理路由
  {
    path:'/admin',
    component:()=>import('../views/admin/index.vue'),
    redirect:'/admin/home',//配置默认路由
    children:[
      {
        path:'home',
        component:()=>import('../views/admin/home.vue')
      },
      {
        path:'myuser',
        component:()=>import('../views/admin/myUser.vue')
      }
    ]
  },
  //用户端路由
  {
    path:'/',
    //刚进入的app首页适合同步加载
    component:home,
    redirect:'/demo1',
    children:[
      {
        path:'demo1',
        component:()=>import('../views/layout/Demo1.vue')
      },
      {
        path:'demo2',
        component:()=>import('../views/layout/Demo2.vue')
      },
      {
        path:'demo3',
        component:()=>import('../views/layout/Demo3.vue')
      },
      {
        path:'demo4',
        component:()=>import('../views/layout/Demo4.vue')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'/reg',
    component:()=>import('../views/reg.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
