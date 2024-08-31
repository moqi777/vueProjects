<template>
<div class="top-div">
    <!-- 头部 -->
    <van-row>
      <van-col span="5" style="text-align: center;">
        <van-image
      round
      width="60px"
      height="60px"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    /></van-col>
      <van-col span="11" class="youhuming">{{ user.user_name }}</van-col>
      <van-col span="8"  class="shezhi">
        <van-icon name="service-o" size="18" @click="">
            <van-col>客服</van-col>
        </van-icon>
        &nbsp;&nbsp;
        <van-icon name="setting-o" size="18" @click="router.push('/sysSet')">
            <van-col>设置</van-col>
        </van-icon>
          </van-col>
    </van-row>
    <!-- 余额 优惠卷 会员积分 -->
     <div class="nav_div">
        <van-row>
            <van-col span="8">0</van-col>
            <van-col span="8">10</van-col>
            <van-col span="8">1</van-col>
        </van-row>
        <van-row>
            <van-col span="8">余额</van-col>
            <van-col span="8">优惠卷</van-col>
            <van-col span="8">会员积分</van-col>
        </van-row>
     </div>
</div>
</template>
    
    <script setup>
    import {ref} from "vue"
    const user=ref({user_name:"用户"})//测试数据，前后端关联要修改
    import { useRouter } from "vue-router";//导入路由 可以路由跳转
    const router=useRouter();//定义路由对象
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
    .top-div{
        width: 100%;
        height: 250px;
        background: linear-gradient(to bottom, #df1234, #ffffff); /* 从粉红色到白色的渐变 */
        padding-top: 20px;
        color: white;
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
    }
    .nav_div ::v-deep .van-col{
        border: 1px solid red;
        color: black;
        height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    </style>