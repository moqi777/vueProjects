<template>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="loading" @refresh="onRefresh" :loosing-text="'释放刷新'">
    
    <!-- 顶部导航 -->
     <div class="big"><div class="banner">
      <van-row class="top_div">
        <van-col span="10" @click="router.push('/')">
          <van-sticky :offset-top="5">
            <svg-icon iconName="icon-dizhiguanli"/>
          </van-sticky>
          <span>&nbsp;&nbsp;{{ address }}<van-icon name="arrow" style="color: gray;"/></span>
        </van-col>
        <van-col span="12">
        </van-col>
        <van-col span="2" @click="router.push('/')">
          <svg-icon iconName="icon-chat"/>
        </van-col>
      </van-row>
      <van-search v-model="value" placeholder="请输入搜索关键词" 
        background="none"
        shape="round"/>
     </div></div> 
    
    <!-- 各类功能排列 -->
    <van-grid :column-num="5" class="icons" :border="false">
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity1.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity2.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity3.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity4.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item/>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity5.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity6.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity7.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item/><van-grid-item/>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity8.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" class="icon-item">
            <img src="../../assets/app_img/demo1_activity9.png" />
            <p>家政服务</p>
        </van-grid-item>
        <van-grid-item/><van-grid-item/><van-grid-item/>
    </van-grid>
    
    <!-- 具体业务内容展示 -->
     <div>
      <!-- 标签页 -->
      <van-tabs v-model:active="active" title-active-color="orange"  swipeable color="orange">
      <van-tab title="推荐">
        <div class="product-container">
        <div class="product-list left-list">
          <div class="product-left" style="text-align: left;" to="/商品1">
            <!-- 商品内容 -->
            <img src="" alt="商品图片" style="height: 50%; width: 50%;"><br>
            <span>商品1</span>
          </div>
        </div>
        <div class="product-list right-list">
          <div class="product-right" style="text-align: right;" to="/商品1">
            <!-- 商品内容 -->
            <img src="" alt="商品图片" style="height: 50%; width: 50%;"><br>
            <span>商品2</span>
          </div>
        </div>
      </div>
      </van-tab>
      <van-tab title="商城">商城</van-tab>
      <van-tab title="外卖">外卖</van-tab>
      <van-tab title="到店优惠">到店优惠</van-tab>
    </van-tabs>
     </div>
    
    <!-- 商城内容 -->
    </van-pull-refresh>
    </template>
    
    <script setup>
    import {ref} from "vue"
    import { useRouter } from "vue-router";//导入路由 可以路由跳转
    const router=useRouter();//定义路由对象
    const address = ref('马尼拉')
    const value = ref()
    //刷新时间
    const time=ref( new Date)
    //刷新触发函数
    const count = ref(0);
        const loading = ref(false);
        const onRefresh = () => {
          setTimeout(() => {
            showToast('刷新成功');
            loading.value = false;
          }, 1000);
          advertisement
        };
    
    //广告函数
    const advertisement =(()=>{});
    </script>
    
    <style scoped>
    .big{
      width: 100%;
      height: 180px;
      background-color: #F8A99B;
    }
    .banner{
      width: 100%;
      height: 150px;
      background-image: url(../../assets/app_img/banner.png);
      background-size: 100% 100%;
      padding-top: 5px;
    }
    .top_div{
      width: 95%;
      height: 30px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
    }
    .top_div ::v-deep .van-col{
      display: flex;
      align-items: center;
      font-size: 13px;
    }
    .top_div ::v-deep .svg-icon{
      width: 25px;
      height: 25px;
    }
    .search-input {
      width: 100%;        /* 设置输入框的宽度 */
      padding: 3px;       /* 设置内边距 */
      border-radius: 20px; /* 设置圆角半径 */
      border: 2px solid black; /* 设置边框颜色和样式 */
      outline: none;       /* 去掉默认的输入框轮廓 */
      margin-left: 10px;
      position: relative;
      z-index: 10;
      flex: 1;
    }
    .search-container {
      display: flex;
      align-items: center;
    }
    .search-button {
      border: 2px solid black; 
      color: white; 
      background-color: black; 
      --van-button-border-color: black;
    }
    
    .icons {
      padding: 10px;
      padding-top: 10px;
    }
    
    .icon-item {
        height: 90px;
    }
    
    .icon-item img {
    background-size: 100% 100%;
      width: 50px;
      height: 50px;
    }
    
    .icon-item p {
      margin-top: 5px;
      font-size: 14px;
      text-align: center;
    }
    
    .product-container {
      display: flex;
      height: 100vh; /* 使容器高度填满视口 */
    }
    .product-list left-list{
      flex: 1; /* 左侧容器占据 1 单位的空间 */
      background-color: #f0f0f0; /* 左侧容器背景色 */
      padding: 20px;
    }
    .product-list right-list{
      flex: 2; /* 右侧容器占据 2 单位的空间 */
      background-color: #e0e0e0; /* 右侧容器背景色 */
      padding: 20px;
    }
    </style>
    