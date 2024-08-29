<template>
<RouterView/>
<!-- 底部导航：vant官网Tabbar标签栏 -->
<van-tabbar v-model="active" route>
  <van-tabbar-item icon="wap-home-o" to="/demo1">首页</van-tabbar-item>
  <van-tabbar-item icon="chat-o" :badge to="/demo2">消息</van-tabbar-item>
  <van-tabbar-item icon="comment-o" to="/demo3">咨询</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/demo4">我的</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import {ref} from "vue"
const active = ref(0)
const badge=ref(999)//消息未读数
</script>

<style scoped>
</style>
