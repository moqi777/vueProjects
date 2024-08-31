<template>
    <van-row style="border: 100px;">
      <van-col span="4" style="text-align: center;">
        <van-image
      round
      width="50px"
      height="50px"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
      </van-col>
      <van-col span="12" class="youhuming">用户名</van-col>
      <van-col span="8"  class="shezhi">
        <van-icon name="service-o">
            <van-col>客服</van-col>
        </van-icon>
        <van-icon name="setting-o" >
            <van-col><RouterLink to="sysSet" style="color: black;">设置</RouterLink></van-col>
        </van-icon>
          </van-col>
    </van-row>
    </template>
    
    <script setup>
    import {ref} from "vue"
    </script>
    
    <style scoped>
    .youhuming{
        display: flex;
      align-items: center; /* 使子元素垂直居中 */
      justify-content: flex-start; /* 使子元素在主轴的开始位置，即居左 */
      height: 50px; /* 容器的高度 */
    }
    .shezhi{
      display: flex;
      justify-content: center; /* 水平居中子元素 */
      align-items: center; /* 垂直居中子元素 */
    }
    </style>