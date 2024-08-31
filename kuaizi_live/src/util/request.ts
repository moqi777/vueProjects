//将axios对象进行封装 提高安全性
//1.导入axios
import axios from "axios";

//2.创建错误映射    status:状态码  info:错误信息
const errorHandler = (status:Number,info:String)=>{
    switch(status){
        case 400:console.log("客户端参数有误");break;
        case 403:console.log("无访问权限");break;
        case 404:console.log("资源不存在/地址错误");break;
        case 500:console.log(info);break;
        default:console.log(info);
    }
}

//3.通过axios创建请求实例
const instance = axios.create({
    //控制超时时间 单位毫秒
    timeout:5000
})

//4.通过请求实例配置请求拦截器(成功的函数,失败的函数)
instance.interceptors.request.use(
    config=>{
        //每次发送请求 都会进入这个拦截器进行 处理
        //所以在这里编写 JWT存储请求头信息 表示所有进入后端的请求都会携带JWT 的token
        const token = localStorage.getItem('token');
        //请求头 存储的数据 不能识别中文
        // config.headers.名称="数据"
        config.headers.token=token;
        
        if(config.method == "post"){
            //处理所有的post请求 看公司要求
        }else if(config.method == "get"){
            //处理所有的get请求
        }
        //... 可以写很多个
        return config;
    },
    error=>{
        //返回错误信息
        return Promise.reject(error)
    }
)
//5.通过请求实例配置响应拦截器(响应成功的函数,响应失败的数据)
instance.interceptors.response.use(
    response=>{
        //根据状态码是否是200来控制是否返回正确或失败信息
        return response.status==200?Promise.resolve(response):Promise.reject(response)
    },
    error=>{
        //定义响应变量 常量 不能改
        const {response} = error
        //调用上面的错误映射传入状态码和错误信息
        errorHandler(response.status,response.info)
    }
)

//6.导出请求实例
export default instance;