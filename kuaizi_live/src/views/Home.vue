<template>
<RouterView/>
<!-- 顶部导航：vant官网NavBar导航栏 -->
<van-nav-bar  left-text="地址" left-arrow>
  <template #right>
    <van-icon name="chat-o" size="30" />
  </template>
  <template #left>
    <van-icon name="location-o" size="30"/>
  </template>
</van-nav-bar>

<!-- 底部导航：vant官网Tabbar标签栏 -->
<van-tabbar v-model="active" route style="position: absolute;">
  <van-tabbar-item icon="wap-home-o" to="/Demo1">首页</van-tabbar-item>
  <van-tabbar-item icon="chat-o" to="/Demo2">外卖</van-tabbar-item>
  <van-tabbar-item to="/Demo2" style="border: 1px solid red;height: 180%;position: relative;bottom: 40px;">
    <van-icon name="smile-o" size="50px"/>
    <span style="position: absolute;bottom: 4px;">到店</span>
  </van-tabbar-item>
  <van-tabbar-item icon="comment-o" to="/Demo3">商城</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/Demo4">我的</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import {ref} from "vue"
const active = ref(0)

//顶部标签栏函数
const onClickLeft = () => history.back();
const onClickRight = () => showToast('消息中心');
</script>

<style scoped>

</style>
