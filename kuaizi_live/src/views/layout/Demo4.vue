<template>
<!-- 渐变背景div -->
<div class="top-div">
    <!-- 头部 -->
    <van-row style="margin-bottom: 5px;">
      <van-col span="5" style="text-align: center;">
        <van-image
            round
            width="60px"
            height="60px"
            :src="getImageUrl(user.img)"
            v-if="user!=null"/>
        <van-image
            round
            width="60px"
            height="60px"
            src="https://img1.baidu.com/it/u=4017730767,3985396437&fm=253&fmt=auto&app=138&f=JPG?w=200&h=200"
            v-if="user==null"/>
    </van-col>
      <van-col span="13" class="youhuming" v-if="user!=null">{{ user.user_name }}</van-col>
      <van-col span="13" class="youhuming" v-if="user==null" @click="router.push('/login')">登录 / 注册</van-col>
      <van-col span="6"  class="shezhi">
        <van-icon name="service-o" size="18" @click="router.push('/')">
            <van-col><span style="font-size: 13px;">客服</span></van-col>
        </van-icon>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <van-icon name="setting-o" size="18" @click="router.push('/sysSet')">
            <van-col><span style="font-size: 13px;">设置</span></van-col>
        </van-icon>
          </van-col>
    </van-row>
    <!-- 余额 优惠卷 会员积分 -->
     <div class="nav_div">
        <van-row class="nav_div_1" v-if="user!=null">
            <van-col span="8"><span>{{ 0 }}</span></van-col>
            <van-col span="8"><span>{{ 10 }}</span></van-col>
            <van-col span="8"><span>{{ 1 }}</span></van-col>
        </van-row>
        <van-row class="nav_div_1" v-if="user==null">
            <van-col span="8"><span>—</span></van-col>
            <van-col span="8"><span>—</span></van-col>
            <van-col span="8"><span>—</span></van-col>
        </van-row>
        <van-row class="nav_div_2">
            <van-col span="8" @click="router.push('/')"><span>余额<van-icon name="arrow" color="rgb(241, 28, 46)"/></span></van-col>
            <van-col span="8" @click="router.push('/')"><span>优惠卷<van-icon name="arrow" color="rgb(241, 28, 46)"/></span></van-col>
            <van-col span="8" @click="router.push('/')"><span>会员积分<van-icon name="arrow" color="rgb(241, 28, 46)"/></span></van-col>
        </van-row>
     </div>
</div>
<!-- 专属优惠券包图片 -->
 <div class="img" @click="router.push('/')"></div>
 <!-- 我的订单 -->
  <div class="my_shopping_trolley">
    <van-row>
        <van-col span="5" style="font-weight: 550;">我的订单</van-col>
        <van-col span="13"></van-col>
        <van-col span="6" style="color: gray;" @click="router.push('/order')">全部订单<van-icon name="arrow" color="rgb(241, 28, 46)"/></van-col>
    </van-row>
    <van-grid column-num="5" :border="false">
        <van-grid-item to="/">
            <svg-icon iconName="icon-daifukuan" /> <span>待付款</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-daishouhuo" /> <span>待收货</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-daishiyong" /> <span>待使用</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-daipingjia" /> <span>待评价</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-tuikuanshouhou" /> <span>退款/售后</span>
        </van-grid-item>
    </van-grid>
  </div>
  <!-- 常用工具 -->
  <div class="common_tools">
    <van-row>
        <van-col span="5" style="font-weight: 550;">常用工具</van-col>
        <van-col span="13"></van-col>
        <van-col span="6"></van-col>
    </van-row>
    <van-grid column-num="4" :border="false">
        <van-grid-item to="/">
            <svg-icon iconName="icon-wodeshoucang" /> <span>我的收藏</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-dizhiguanli"/> <span>我的地址</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-jianyi1" /> <span>我有建议</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-xiaoxizhongxin" /> <span>消息中心</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-hands" /> <span>免费入驻</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-yaoqinghaoyou" /> <span>邀请好友</span>
        </van-grid-item>
    </van-grid>
  </div>
   <!-- 我的生活圈 -->
   <div class="my_life_circle">
    <van-row>
        <van-col span="7" style="font-weight: 550;">我的生活圈</van-col>
        <van-col span="11"></van-col>
        <van-col span="6"></van-col>
    </van-row>
    <van-grid column-num="4" :border="false">
        <van-grid-item to="/">
            <svg-icon iconName="icon-baobei" /> <span>发布的宝贝</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-qiandaizi" /> <span>我卖出的</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-womaidaode" /> <span>我买到的</span>
        </van-grid-item>
        <van-grid-item to="/">
            <svg-icon iconName="icon-qisu" /> <span>申诉/仲裁</span>
        </van-grid-item>
    </van-grid>
  </div>
  <!-- 退出 -->
   <div class="exit" @click="exit" v-if="user!=null">退出账号</div>
  <!-- 填充底部 -->
   <div style="width: 100%;height: 70px;"></div>
</template>
    
    <script setup>
    import {ref} from "vue"
    // const user=ref({user_name:"用户",img:"/user/头像.jpg"})//测试数据，前后端关联要修改
    const user=ref()//测试数据，前后端关联要修改
    import { useRouter } from "vue-router";//导入路由 可以路由跳转
    const router=useRouter();//定义路由对象
    const a = ref(0);
    // 退出
    let exit=()=>{
        router.push('/')
    }
    //用于解析图片本地地址
    const getImageUrl=(imgPath)=> {
        return require('../../assets'+imgPath); 
    }
    </script>
    
    <style scoped>
    .youhuming{
        margin-top: 5px;
      display: flex;
      align-items: center; /* 使子元素垂直居中 */
      justify-content: flex-start; /* 使子元素在主轴的开始位置，即居左 */
      height: 50px; /* 容器的高度 */
      color: white;
      font-size: 15px;
    }
    .shezhi{
      display: flex;
      justify-content: center; /* 水平居中子元素 */
      align-items: center; /* 垂直居中子元素 */
    }
    .shezhi ::v-deep .van-icon{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .top-div{
        width: 100%;
        height: 130px;
        background: linear-gradient(to bottom, #df1234, #ffffff); /* 从粉红色到白色的渐变 */
        padding-top: 20px;
        color: white;
        margin-bottom: 50px;
    }
    .nav_div{
        width: 95%;
        height: 100px;
        margin: auto;
        border-radius: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0px 0px 1px gray;
    }
    .nav_div ::v-deep .van-col{
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav_div_1{
        color: rgb(241, 28, 46);
        font-size: 20px;
    }
    .nav_div_2{
        color: black;
        font-size: 15px;
    }
    .img{
        width: 95%;
        height: 110px;
        margin:auto;
        background-image: url(../../assets/app_img/Exclusive_coupon_pack.png);
        background-size: 100% 100% ;
    }
    /* 我的订单 */
    .my_shopping_trolley{
        width: 95%;
        height: 130px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        box-shadow: 0px 0px 1px gray;
        border-radius: 5px;
    }
    .my_shopping_trolley ::v-deep .van-row{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 18px;
    }
    .my_shopping_trolley ::v-deep .svg-icon{
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
    }
    .my_shopping_trolley span{
        font-size: 13px;
    }
    /* 常用工具 */
    .common_tools{
        width: 95%;
        height: 220px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        box-shadow: 0px 0px 1px gray;
        border-radius: 5px;
    }
    .common_tools ::v-deep .van-row{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 18px;
    }
    .common_tools ::v-deep .svg-icon{
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
    }
    .common_tools span{
        font-size: 13px;
    }
    /* 我的生活圈 */
    .my_life_circle{
        width: 95%;
        height: 130px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        box-shadow: 0px 0px 1px gray;
        border-radius: 5px;
    }
    .my_life_circle ::v-deep .van-row{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 18px;
    }
    .my_life_circle ::v-deep .svg-icon{
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
    }
    .my_life_circle span{
        font-size: 13px;
    }
    /* 退出 */
    .exit{
        width: 95%;
        height: 45px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        box-shadow: 0px 0px 1px gray;
        border-radius: 5px;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    </style>