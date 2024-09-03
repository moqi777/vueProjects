<template>
    <van-nav-bar
      title="家政"
      left-text="返回"
      left-arrow
      @click="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" size="26" color="black" />
      </template>
    </van-nav-bar>
    <div class="policy-container">
      <p class="policy-date">
        <strong>家政服务</strong><br />
        <strong>筷子生活家政服务：让家更整洁，生活更美好</strong>
      </p>
      <div class="button-container">
        <van-button plain hairline round type="primary">Wechat-num<br />复制微信</van-button>
        <van-button plain hairline round type="primary">TG-num<br />复制TG</van-button>
      </div>
      <div class="image-container">
        <img src="../../assets/app_img/Economics.png" />
        <img src="../../assets/app_img/Economics2.png" />
      </div>
      <div class="background-container">
        <div class="bordered-container">
          <div class="content-section">
            <p>小飞机</p>
            <p>Telegram</p>
            <p>http://t.me/Kuaiziservices
              <van-button plain hairline round type="primary" class="custom-button">Wechat-num<br />复制</van-button>
            </p>
            <p>http://t.me/Kuaiziservice
              <van-button plain hairline round type="primary" class="custom-button">Wechat-num<br />复制</van-button>
            </p>
          </div>
          <hr class="separator"> <!-- 分割线 -->
          <div class="content-section">
            <p>微信</p>
            <p>WeChat</p>
            <p>kuaizilife_visa
              <van-button plain hairline round type="primary" class="custom-button">Wechat-num<br />复制</van-button>
            </p>
            <p>kuaizifuwu01
              <van-button plain hairline round type="primary" class="custom-button">Wechat-num<br />复制</van-button>
            </p>
          </div>
        </div>
      </div>
      <div class="bottom-button-container">
        <button class="bottom-button" @click="router.push('/findeconomics')">找家政</button> <!-- 白色背景按钮 -->
      </div>
    </div>
    <van-floating-bubble icon="service-o" @click="onClick"  style="background-color: white; color: blue;"/>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { showToast } from 'vant';
  const router=useRouter()

  const onClick = () => {
      showToast('点击气泡');
    };

  const onClickLeft = () => history.back();
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* 禁止页面水平滚动 */
  }
  
  .policy-container {
    padding: 0;
    margin: 0;
    width: 100vw; /* 确保容器宽度为视口宽度 */
    padding-bottom: 60px; /* 给底部按钮留出空间 */
  }
  
  .policy-date {
    margin-bottom: 16px;
    font-size: 14px;
    color: #666;
    padding: 0 20px; /* 仅为文字部分添加内边距 */
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px; /* 仅为按钮部分添加内边距 */
  }
  
  .button-container .van-button {
    flex: 1;
    margin-right: 8px;
  }
  
  .button-container .van-button:last-child {
    margin-right: 0;
  }
  
  .image-container {
    margin: 0;
    padding: 0;
    width: 100vw; /* 确保容器宽度为视口宽度 */
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .background-container {
    background-color: #fdd2bf; /* 设置背景颜色 */
  }
  
  .bordered-container {
    padding: 5px; /* 内边距 */
    border: 1px solid red; /* 设置红色边框 */
    border-radius: 12px; /* 设置圆角边框 */
    margin: 10px; /* 外边距 */
  }
  
  .content-section {
    color: #ff8c56; 
    text-align: center;
  }
  
  .separator {
    border: 0;
    border-top: 1px solid red;
    margin: 10px 0;
  }
  
  .custom-button {
    background-color: #fdd2bf; /* 将按钮背景色设置为与页面背景色一致 */
    border-color: #ff8c56; /* 将按钮边框颜色设置为红色 */
    color: #ff8c56; /* 将按钮字体颜色设置为红色 */
  }
  
  .bottom-button-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #ffffff; /* 白色背景 */
    display: flex;
    justify-content: center; /* 居中对齐按钮 */
  }
  
  .bottom-button {
    background-color: #003366; /* 深蓝背景 */
    color: #ffffff; /* 白色字体 */
    border: 2px solid #003366; /* 深蓝色边框 */
    border-radius: 0; /* 直角边框 */
    padding: 10px 20px;
    font-size: 16px;
    width: 80%; /* 占据底部80%宽度 */
    max-width: 400px; /* 最大宽度以保持可读性 */
  }
  </style>
  