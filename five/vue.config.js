const { defineConfig } = require('@vue/cli-service')
// 按需引用添加的内容
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
//在elementplus基础上 Vant额外导入
const { VantResolver } = require('@vant/auto-import-resolver');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //跨域代理对象
    proxy:{
      //可以配置很多组跨域 每组跨域都是一个对象
      // '/任意写':{配置好了跨域}
      // http://localhost:9999/任意写/show 就可以跨域了
      // /任意写/show 也可以跨域
      '/api':{//配置一个名为api的代理
        //配置后端地址 proxy会转发到这里去
        target:'http://192.168.11.27:9999',
        //路径重写 目的是去除请求地址中的/api
        pathRewrite:{"^/api":''},
        //代理webSockets 可以不配置
        ws:true,
        //开启跨域
        changeOrigin:true
      }
    }
  },
  //需要加一个关键字
  configureWebpack:{
    //官网复制粘贴来的
    plugins: [
      //VantResolver() 是在Elementplus基础上额外添加的
      AutoImport({
        resolvers: [ElementPlusResolver(),VantResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(),VantResolver()],
      }),
    ]
  }
})