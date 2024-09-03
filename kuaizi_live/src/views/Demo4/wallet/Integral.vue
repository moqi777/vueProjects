<template>
<van-nav-bar
    title="会员积分"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    >
    <template #right>
    <van-icon name="share-o" size="18" @click="showPopup" />
  </template>
  </van-nav-bar>
  <van-cell style="background: linear-gradient(to bottom, #ff7779, #ffffff);
  height: 100px;">
    <van-row>
        <van-col span="18" style="text-align: left;">
            <span style="font-size: 25px;
        font-weight: bold;">{{ integral }}</span><br>
            <span>我的积分</span><br>
            <van-button color="#ff7779" round="" size="small" @click="router.push('/integral2')">
                查看排行榜</van-button>
        </van-col>
        <van-col span="6">
            <van-button color="linear-gradient(to bottom, #ff7779, #ffffff)" round="" size="small">
                获取积分</van-button>
        </van-col>
    </van-row>
  </van-cell>
  <van-cell class="nav_div">
    <van-grid column-num="6" :border="false">
        <van-grid-item to="/">
            <van-icon name="fire-o" /> <span>+1</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="fire-o" /><span>+2</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="fire-o" /><span>+3</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="fire-o" /> <span>+4</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="fire-o" /> <span>+5</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="fire-o" /> <span>+6</span>
        </van-grid-item>
        <br>
        <van-button round block type="danger" @click="ral" v-if="inte==0">
            签到
    </van-button>
        <van-button  round block v-if="inte==1">已签到</van-button>
        </van-grid>
        
  </van-cell>
  <div class="nav_div">
    <span>热兑</span>
    <span style="color: #ff7779;">每天10:00点更新</span>
    <van-row>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img1" @click="img1"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img2" @click="img2"></van-col>
    </van-row>
    <van-row style="height: 170px;">
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img3" @click="img3"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img4" @click="img4"></van-col>
    </van-row>
    <van-row>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img5" @click="img5"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img6" @click="img6"></van-col>  
    </van-row>
    <van-row style="height: 170px;">
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img7" @click="img7"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img8" @click="img8"></van-col> 
    </van-row>
  </div>
<!-- 弹出层 -->
<van-popup
  v-model:show="show"
  position="bottom"
  :style="{ height: '30%' }"
>
<div>
    <van-cell>
        <van-row style="justify-content: center; font-size: 20px;
        font-weight: bold;">
            <van-col>选择要分享的平台</van-col>
        </van-row>
        <van-grid column-num="4" :border="false">
        <van-grid-item to="/">
            <van-icon name="wechat" size="40"/> <span>微信</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="friends-o" size="40"/><span>微信朋友圈</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="good-job-o" size="40"/><span>小飞机</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="link-o" size="40"/> <span>复制链接</span>
        </van-grid-item>
        </van-grid>
    </van-cell>
    <van-cell @click="showBottom" class="bottom">
        <van-row style="justify-content: center;">
            <van-col>取消</van-col>
        </van-row>
    </van-cell>
</div>
</van-popup>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router";
import { showDialog } from 'vant';

const inte=ref(0)
//积分
const integral=ref(50)

//路由
const router=useRouter()
//签到
const ral=()=>{
    inte.value=1
    integral.value=Number(integral.value)+Number(1)
}
const onClickLeft = () => history.back();

// 弹出层
const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
const showBottom=()=>{
    show.value=false;
}
const img1=()=>{
    if(integral.value<50){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-50)
console.log("生成优惠券")
    }
}
const img2=()=>{
    if(integral.value<100){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-100)
    }
}
const img3=()=>{
    if(integral.value<200){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-200)
    }
}
const img4=()=>{
    if(integral.value<400){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-400)
    }
}
const img5=()=>{
    if(integral.value<50){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-50)
    }
}
const img6=()=>{
    if(integral.value<100){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-100)
    }
}
const img7=()=>{
    if(integral.value<200){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-200)
    }
}
const img8=()=>{
    if(integral.value<400){
        showDialog({
  title: '',
  message: '兑换失败，你的积分不足'
}).then(() => {
  // on close
});
    }else{
        showDialog({
  title: '',
  message: '兑换成功'
}).then(() => {
  // on close
});
integral.value=Number(integral.value-400)
    }
}
</script>

<style scoped>
.bottom{
    background-color: aliceblue;
}
.nav_div{
        width: 95%;
        height: auto;
        margin: auto;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0px 0px 1px gray;
    }
.img1{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i1.png);
    background-size: 100% 100% ;
}
.img2{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i2.png);
    background-size: 100% 100% ;
}
.img3{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i3.png);
    background-size: 100% 100% ;
}
.img4{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i4.png);
    background-size: 100% 100% ;
}
.img5{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i5.png);
    background-size: 100% 100% ;
}
.img6{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i6.png);
    background-size: 100% 100% ;
}
.img7{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i7.png);
    background-size: 100% 100% ;
}
.img8{
    width: 90%;
    height: 150px;
    margin:auto;
    background-image: url(../../../assets/app_img/integral_i8.png);
    background-size: 100% 100% ;
}
</style>