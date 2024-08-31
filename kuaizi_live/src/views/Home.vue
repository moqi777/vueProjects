<template>
<RouterView/>
<!-- 底部导航：vant官网Tabbar标签栏 -->
<van-tabbar v-model="active" route active-color="#ee0a24">
  <van-tabbar-item icon="wap-home-o" to="/Demo1">首页</van-tabbar-item>
  <van-tabbar-item icon="completed-o" to="/Demo2">外卖</van-tabbar-item>
  <van-tabbar-item class="van-table-item">
    <!-- <van-icon name="point-gift" size="50px"/> -->
    <svg-icon iconName="icon-daodian" style="width: 50px;height: 50px;"/>
    <div>到店</div>
  </van-tabbar-item>
  <van-tabbar-item icon="shop-o" to="/Demo3">商城</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/Demo4">我的</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import {ref} from "vue"
const active = ref(0)
</script>

<style scoped>
.van-table-item{
  height: 150%;
  margin-top: -25px;
  display: flex;
  text-align: center;
  z-index: 99;
}
</style>
