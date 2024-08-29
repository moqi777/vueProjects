import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//1.导入elementplus
// import Elementplus from 'element-plus'
// import 'element-plus/dist/index.css'

//2.使用elementplus  如果导入了路由需要在路由之前使用 否者失效
createApp(App)
// .use(Elementplus)
.use(router)
.mount('#app')
