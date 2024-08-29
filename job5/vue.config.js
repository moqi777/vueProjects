const { defineConfig } = require('@vue/cli-service')
// 按需引用添加的内容
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  //需要加一个关键字
  configureWebpack:{
    //官网复制粘贴来的
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  devServer:{
    //跨域代理对象
    proxy:{
      //可以配置很多组跨域 每组跨域都是一个对象
      // '/任意写':{配置好了跨域}
      // http://localhost:9999/任意写/show 就可以跨域了
      // /任意写/show 也可以跨域
      '/api':{//配置一个名为api的代理
        //配置后端地址 proxy会转发到这里去
        target:'http://localhost:8082',
        //路径重写 目的是去除请求地址中的/api
        pathRewrite:{"^/api":''},
        //代理webSockets 可以不配置
        ws:true,
        //开启跨域
        changeOrigin:true
      }
    }
  }
})
