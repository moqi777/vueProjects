<template>
<!-- 头部导航栏 -->
<van-nav-bar
  title=""
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<h5 style="text-indent: 1em;font-size: 25px;margin-top: 10px;">手机快捷登录</h5>
<!-- 登录表单 -->
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="admin.account"
      name="account"
      label="用户名"
      placeholder="用户名 / 姓名 / 手机号"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="admin.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

<div style="text-align: center;">
    <RouterLink to="/reg">没有账号？去注册</RouterLink>
</div>
</template>

<script setup>
import {ref} from "vue"
import api from '../api/index'
import { showSuccessToast, showFailToast } from 'vant';
import 'vant/lib/index.css';
import { useRouter } from "vue-router";//导入路由 可以路由跳转

const admin = ref({});//登录表单信息
const router=useRouter();//定义路由对象
//登录提交触发的函数 values?
const onSubmit = (values) => {
    console.log('submit', values);
    //发送异步请求
    api.postReq('/oadmin/login',values).then(res=>{
        let result = res.data;
        if(result.code==1){
            showSuccessToast(result.msg);
            //存储登录成功的用户信息(通过浏览器本地保存)
            //localStorage 类似于之前的application
            //sessionStorage 类似于之前的session
            //存储时需要转换String类型 JSON.stringify()
            //可以在任何vue 或js 组件中使用
            let test = localStorage.setItem("admin",JSON.stringify(result.data));
            let token = localStorage.setItem("token",result.data.token);
            console.log(test);
            //进入用户主页
            router.push("/demo1")
        }else{
            showFailToast(result.msg);
        }
      })
};
//返回上一级
const onClickLeft = ()=>history.back();
</script>

<style scoped>
</style>
