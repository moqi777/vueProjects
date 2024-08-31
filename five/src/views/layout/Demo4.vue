<template>
<!-- 使用Layout布局 一行分成不同的比例 一共24份 -->
 <!-- 没有登录时显示的 -->
 <div v-if="admin==null">
    <van-row align="center" style="height: 120px;">
    <van-col span="7" align="center">
        <van-image
        round
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
    </van-col>
    <van-col span="13" justify="center" style="font-size: 17px;">
        <RouterLink to="/login" style="color: black;">点击登录 / 注册</RouterLink><br>
        <span style="color: gray;">登陆之后享受更多信息</span>
    </van-col>
    <van-col span="4">
        <van-icon name="qr" size="30"/>
        <van-icon name="arrow" size="20" style="color: gray;"/>
    </van-col>
    </van-row>
</div>
<!-- 登录后显示内容 -->
<div v-if="admin!=null">
    <van-row align="center" style="height: 120px;">
    <van-col span="7" align="center">
        <van-image
        round
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
    </van-col>
    <van-col span="13" justify="center" style="font-size: 17px;">
        <span style="font-size: 20px;">{{ admin.account }}</span><br>
        <RouterLink to="/" style="color: gray;">查看并编辑个人资料</RouterLink><br>
        <RouterLink to="/admin" style="color: gray;" v-if="admin.account=='admin'">进入后台 ></RouterLink>
    </van-col>
    <van-col span="4">
        <van-icon name="qr" size="30"/>
        <van-icon name="arrow" size="20" style="color: gray;"/>
    </van-col>
    </van-row>
</div>
<!-- vant官网 Grid宫格 实现中间导航栏 -->
<van-grid square clickable :border="false" icon-size="35px">
    <van-grid-item to="/a" icon="eye-o" text="看房管理(0)" />
    <van-grid-item to="/a" icon="star-o" text="我的收藏" />
    <van-grid-item to="/a" icon="coupon-o" text="我的订阅" />
    <van-grid-item to="/a" icon="question-o" text="我的问答" />
    <van-grid-item to="/a" icon="clock-o" text="我的足迹" />
    <van-grid-item to="/a" icon="balance-list-o" text="卖房管理" />
    <van-grid-item to="/a" icon="refund-o" text="租房管理" />
    <van-grid-item to="/a" icon="orders-o" text="我的订单" />
    <van-grid-item to="/a" icon="gift-o" text="我的优惠卷" />
    <van-grid-item to="/a" icon="video-o" text="我的随手拍" />
</van-grid>
<!-- 我的资产 -->
 <h3 style="text-indent: 1em;">我的资产</h3>
 <div style="display: flex;justify-content: center;">
    <van-image
    width="90%"
    height="100"
    :src="require('../../assets/bg.png')"
    />
 </div>
 <!-- ceil单元格 -->
  <br>
 <van-cell title="用户反馈" is-link to="/" size="large"/>
 <van-cell title="设置" is-link to="/" size="large"/>
 <div style="text-align: center;" v-if="admin!=null">
    <h3 @click="exit">退出登录</h3>
 </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import { useRouter } from "vue-router";
const admin = ref({})
const router = useRouter()
//获取登录的用户信息
onMounted(()=>{
    //因为当时存储的时候是通过String存储，获取出来也是string
    //需要先通过String==>json对象 再给value赋值
    admin.value = JSON.parse(localStorage.getItem('admin'));
})
let exit = ()=>{
    //删除本地保存的登录信息
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    router.push('/login')
}
</script>

<style scoped>
</style>
