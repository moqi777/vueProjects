<template>
<van-nav-bar
  title="系统设置"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<div class="settings-page">
    <van-cell-group>
      <van-cell title="个人资料" is-link to="/set1" v-if="user!=null"/>     
      <van-cell title="账号安全" is-link to="/set2" v-if="user!=null"/>
      <van-cell title="修改登录密码" is-link to="/set3" v-if="user!=null"/>
      <van-cell title="语言设置" is-link to="/set4"/>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="清除缓存" @click="open()">{{HC}}</van-cell>
      <van-cell title="当前版本" :value="3.371" @click="DianJi()"/>
    </van-cell-group>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue"

const onClickLeft = () => history.back();
const HC=ref("27MB")
const user = ref()
onMounted(()=>{
  user.value = JSON.parse(localStorage.getItem('admin'))
})
const open = () => {
  showConfirmDialog({
    message: '确定清除缓存？',
  })
    .then(() => {
      HC.value = "ok";
    })
    .catch(() => {
      // 用户点击了取消
    });
};
const DianJi=()=>showToast('当前已是最新版本');
</script>

<style scoped>
.settings-page{
  text-align: left;
}
</style>
