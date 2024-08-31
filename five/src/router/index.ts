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

export default router
