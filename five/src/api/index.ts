//1.引入封装好的请求 当前文件和导入文件都是js 后缀js可以省略
import axios from '../util/request'
//2.引入封装好的公共地址
import base from './base'

//创建公共API接口 编写好了 以后发送不同模块网络请求都是引入这个api接口 来实现
//如果公司业务不同 这个也是经常修改的
const api = {
    //比如：post请求封装在一起
    //如果使用了ts 定义函数类似于java定义方法
    //方法参数都需要添加类型
    //添加格式(参数1:类型,参数2:类型)
    //ts语法 如果参数后面添加?表示可选参数
    postReq(url:String,data?:Object){
        return axios.post(base.baseUrl+url,data)
    },
    //比如：get请求封装在一起
    getReq(url:String,data?:Object){
        return axios.post(base.baseUrl+url,data)
    }
}

export default api;

//其他组件如何使用
// api.postReq('/add',data).then(res=>{})