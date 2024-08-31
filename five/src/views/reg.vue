<template>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title=""
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h5 style="text-indent: 1em;font-size: 25px;margin-top: 10px;">手机快捷注册</h5>
    <!-- 注册表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="admin.account"
          name="account"
          label="用户名"
          placeholder="用户名"
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
        <!-- <van-field
          v-model="admin.password"
          type="password"
          name="password2"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        /> -->
        <van-field name="sex" label="性别">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="0">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="admin.name"
          name="name"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="admin.phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="admin.email"
          type="email"
          name="email"
          label="邮件"
          placeholder="邮件"
          :rules="[{ required: true, message: '请填写邮件' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    
    <div style="text-align: center;">
        <RouterLink to="/login">已有账号？去登录</RouterLink>
    </div>
    </template>
    
    <script setup>
    import {ref} from "vue"
    import api from '../api/index'
    import { showSuccessToast, showFailToast } from 'vant';
    import 'vant/lib/index.css';
    import { useRouter } from "vue-router";//导入路由 可以路由跳转

    const admin = ref({});//注册表单信息
    const checked = ref('1');//单选框性别默认值
    const router=useRouter();//定义路由对象
    //注册提交触发的函数 values?
    const onSubmit = (values) => {
        console.log('submit', values);
        api.postReq('/oadmin/reg',values).then(res=>{
          let result = res.data;
          if(result.code==1){
              showSuccessToast(result.msg);
              //进入登录页面
              router.push("/login")
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
    