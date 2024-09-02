import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'vant/lib/index.css';
//引入所有的Elementplus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入iconfont
import SvgIcon from './components/SvgIcon.vue'
import './assets/iconfont/iconfont'

const app = createApp(App)
//通过app组件遍历所有的elementplus图标 每遍历一个注册一个
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//绑定iconfont
app.component('SvgIcon',SvgIcon);
app.use(router).mount('#app')

//解决调整大小bug
const debounce=(fn:any,delay:any)=>{
    let timer:any
    return (...args:any)=>{
      if(timer) clearTimeout(timer)
      timer=setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }
  const _ResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
    constructor(callback:any) {
    callback = debounce(callback, 200);
    super(callback);
    }
  }