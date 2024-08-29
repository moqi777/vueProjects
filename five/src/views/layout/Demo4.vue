<template>
<!-- 使用Layout布局 一行分成不同的比例 一共24份 -->
 <!-- 没有登录时显示的 -->
 <div v-if="status==0">
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
<div v-if="status==1">
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
        <span style="font-size: 20px;">{{ name }}</span><br>
        <RouterLink to="/" style="color: gray;">查看并编辑个人资料</RouterLink>
    </van-col>
    <van-col span="4">
        <van-icon name="qr" size="30"/>
        <van-icon name="arrow" size="20" style="color: gray;"/>
    </van-col>
    </van-row>
</div>
<!-- vant官网 Grid宫格 实现中间导航栏 -->
<van-grid square clickable :border="false" icon-size="35px">
    <van-grid-item to="/" icon="eye-o" text="看房管理(0)" />
    <van-grid-item to="/" icon="star-o" text="我的收藏" />
    <van-grid-item to="/" icon="coupon-o" text="我的订阅" />
    <van-grid-item to="/" icon="question-o" text="我的问答" />
    <van-grid-item to="/" icon="clock-o" text="我的足迹" />
    <van-grid-item to="/" icon="balance-list-o" text="卖房管理" />
    <van-grid-item to="/" icon="refund-o" text="租房管理" />
    <van-grid-item to="/" icon="orders-o" text="我的订单" />
    <van-grid-item to="/" icon="gift-o" text="我的优惠卷" />
    <van-grid-item to="/" icon="video-o" text="我的随手拍" />
    <van-grid-item to="/admin" icon="user-o" text="后台管理" />
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
</template>

<script setup>
import {ref} from "vue"
const status = ref(0);//伪代码，后期需要修改，目前表示登录状态
const name=ref("李SIR")
</script>

<style scoped>
</style>
