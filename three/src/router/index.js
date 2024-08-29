//1.导入路由组件对象
import { createRouter,createWebHashHistory } from "vue-router";
import home from '../views/home.vue'

//2.创建路由规则对象(数组 因为vue组件有很多个)
const routes = [
    {
        path:'/',    //访问的路径
        component:home
    },{
        path:'/user',
        //这种写法 属于异步加载 上面的方式属于同步加载
        //一般来说首页适合 同步加载 其他组件 都是异步加载
        component:()=>import('../views/user.vue')
    },{
        path:'/news',
        component:()=>import('../views/news.vue')
    },{
        //:表示要传递参数 类似于后端? 属性名可以任意编写
        //vue组件就需要根据属性名来取值
        // path:'/newsContent/:属性1/:属性2/:属性3' 这是传递多个值
        path:'/newsContent/:type',
        component:()=>import('../views/newsContent.vue')
    },{//一级路由
        path:'/article',
        component:()=>import('../views/article.vue'),
        //二级路由 二级路由开始 地址不要加/
        children:[
            {
                path:'history',
                component:()=>import('../views/article/history.vue')
            },
            {
                path:'music',
                component:()=>import('../views/article/music.vue')
            },
            {
                path:'sports',
                component:()=>import('../views/article/sports.vue')
            }
        ]
    }
]

//3.创建路由组件
const router = createRouter({
    //配置路由历史模式,常用的两种历史模式（寻址方式）
    //createWebHashHistory：URL带#号，无需服务器支持，快速实现 比较常用 需要配合后端做重定向 否则会404
    //createWebHistory：更干净的URL，需服务器支持
    history:createWebHashHistory(),
    routes  //路由规则
})

//4.导出vue组件对象
export default router;