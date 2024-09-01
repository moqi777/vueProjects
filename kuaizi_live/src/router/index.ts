import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    component:Home,
    redirect:'/Demo1',
    children:[
      {
        path:'Demo1',
        component:()=>import('../views/layout/Demo1.vue')
      },
      {
        path:'Demo2',
        component:()=>import('../views/layout/Demo2.vue')
      },
      {
        path:'Demo3',
        component:()=>import('../views/layout/Demo3.vue')
      },
      {
        path:'Demo4',
        component:()=>import('../views/layout/Demo4.vue')
      },
    ]
  },
  {
    path:'/sysSet',
    component:()=>import('../views/Demo4/sysSet/Home.vue')
  },
  {
    path:'/set1',
    component:()=>import('../views/Demo4/sysSet/Set1.vue')
  },
  {
    path:'/set2',
    component:()=>import('../views/Demo4/sysSet/Set2.vue')
  },
  {
    path:'/set3',
    component:()=>import('../views/Demo4/sysSet/Set3.vue')
  },
  {
    path:'/set4',
    component:()=>import('../views/Demo4/sysSet/Set4.vue')
  },
  {
    path:'/set5',
    component:()=>import('../views/Demo4/sysSet/Set5.vue')
  },
  {
    path:'/set6',
    component:()=>import('../views/Demo4/sysSet/Set6.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*
//添加路由守卫：控制哪些请求可以放行 哪些请求必须要登录
//to：要访问的地址  from：从哪个地址过来的
//next：表示放行    next('/login') 强制访问login
router.beforeEach((to,from,next)=>{
  //定义一个组件配置放行地址数组
  const exclude=['/login','/reg','/demo1','/demo3','/demo4']
  //如果访问的地址被exclude包含 则可以放行
  if(exclude.includes(to.path)) next()
  else {
      //如果不是放行的请求 判断是否登录过
      let token = localStorage.getItem("token")
      if(!token){//如果没有登录的token 则强制登录
          return next('/login')
      }
      //如果有登录的token 则正常访问
      next();
  }
})
*/

export default router
