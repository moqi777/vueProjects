import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
//引入路由 如果格式是js 可以省略后缀
//如果文件名就一个 叫index.js 都可以省略
import router from './router'

//使用路由 app创建之后 挂载之前 位置一定不能换
createApp(App).use(router).mount('#app')

// const app = createApp(App)
// //全局引入axios 这样定义好了后 其他组件就可以通过这个任意名称 发送异步请求
// //就是在全局配置中添加了 axios别名
// app.config.globalProperties.aaa=axios
// app.mount('#app')
