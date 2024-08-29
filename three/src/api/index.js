//1.引入封装好的请求 当前文件和导入文件都是js 后缀js可以省略
import axios from '../util/request'
//2.引入封装好的公共地址
import base from './base'

//创建公共API接口 编写好了 以后发送不同模块网络请求都是引入这个api接口 来实现
//如果公司业务不同 这个也是经常修改的
const api = {
    //比如：post请求封装在一起
    postReq(url,data){
        return axios.post(base.baseUrl+url,data)
    },
    //比如：get请求封装在一起
    getReq(url,data){
        return axios.post(base.baseUrl+url,data)
    }
}

export default api;

//其他组件如何使用
// api.postReq('/add',data).then(res=>{})