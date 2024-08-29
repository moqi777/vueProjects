import { createRouter, createWebHashHistory } from "vue-router"
import home from '../views/home.vue'

const routes = [
    {
        path:'/',
        component:home
    },
    {
        path:'/study',
        component:()=>import('../views/study.vue'),
        children:[
            {
                path:'studyData/:name',
                component:()=>import('../views/study/studyData.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;