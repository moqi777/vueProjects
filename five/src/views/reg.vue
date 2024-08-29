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
          v-model="user.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="user.password"
          type="password2"
          name="password2"
          label="确认密码"
          placeholder="确认密码"
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
        <RouterLink to="/login">已有账号？去登录</RouterLink>
    </div>
    </template>
    
    <script setup>
    import {ref} from "vue"
    const user = ref({});//注册表单信息
    //注册提交触发的函数 values?
    const onSubmit = (values) => {
        console.log('submit', values);
    };
    //返回上一级
    const onClickLeft = ()=>history.back();
    </script>
    
    <style scoped>
    </style>
    