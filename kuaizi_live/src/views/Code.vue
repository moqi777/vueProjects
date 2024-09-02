<template>
    <van-nav-bar left-text="返回" left-arrow>
      <template #left>
        <van-icon name="arrow-left" size="26" color="black" @click="onClickLeft"/>
      </template>
      <template #right>
        <a class="nav-right-link" @click="navigateTo('/login')">密码登录</a>
      </template>
    </van-nav-bar>
  
    <div class="container">
      <div class="title">请输入验证码</div>
      <div class="subtitle">已经发送至 {{ d }}</div>
      
      <div class="code-input">
        <input
          v-for="(digit, index) in code"
          :key="index"
          v-model="code[index]"
          @input="handleInput(index)"
          @keydown.backspace="onBackspace(index)"
          maxlength="1"
          type="text"
          class="digit-input"
        />
      </div>
      
      <div class="actions">
        <a 
          href="#" 
          @click.prevent="resendCode" 
          :class="{ disabled: isResendDisabled }"
        >
          {{ isResendDisabled ? `重新获取验证码 (${countdown})` : '重新获取验证码' }}
        </a>
        <span>|</span>
        <a href="#" @click="reportIssue">收不到验证码</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  
  const onClickLeft = () => history.back();
  
  const d = ref('+8613361719272');
  const code = ref(new Array(4).fill('')); // 4位验证码
  
  const handleInput = (index) => {
    logCode(); // 打印验证码
    if (index < code.value.length - 1) {
      document.querySelectorAll('.digit-input')[index + 1].focus();
    }
  };
  
  const onBackspace = (index) => {
    if (index > 0 && !code.value[index]) {
      document.querySelectorAll('.digit-input')[index - 1].focus();
    }
  };
  
  const logCode = () => {
    console.log(code.value.join(''));
  };
  
  const countdown = ref(60);
  const isResendDisabled = ref(true);
  
  const startCountdown = () => {
    isResendDisabled.value = true;
    countdown.value = 60;
  
    const interval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value -= 1;
      } else {
        isResendDisabled.value = false;
        clearInterval(interval);
      }
    }, 1000);
  };
  
  const resendCode = () => {
    if (!isResendDisabled.value) {
      alert("验证码已重新发送！");
      startCountdown();
    }
  };
  
  const reportIssue = () => {
    alert("请联系我们的客服以解决此问题。");
  };
  
  // 页面加载时开始倒计时
  startCountdown();
  </script>
  
  <style scoped>
  .nav-right-link {
    color: black;
    font-size: 20px;
  }
  
  .title {
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 16px;
  }
  
  .container {
    padding: 20px;
  }
  
  .subtitle {
    margin-bottom: 12px;
  }
  
  .code-input {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 20px;
  }
  
  .digit-input {
    width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .actions {
    margin-top: 20px;
    text-align: center;
  }
  
  .actions a {
    color: #007BFF;
    text-decoration: none;
  }
  
  .actions a.disabled {
    color: #ccc;
    pointer-events: none;
  }
  
  .actions span {
    margin: 0 10px;
    color: #666;
  }
  </style>
  