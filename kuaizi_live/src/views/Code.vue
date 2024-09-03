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
      <div class="subtitle">已经发送至 {{ user_phone }}</div>
      
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
        <a @click="reportIssue">收不到验证码</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  import api from '../api/index'

  const v_code = ref(null);//后端传来的验证码
  //一进入到这个页面就向后端发送请求获取code
  onMounted(()=>{
    api.postReq('/kuser/getCode').then(res=>{
      if (res.data.code==0) {
        showToast('网络错误');
      }
      v_code.value = res.data.data
    })
  })

  //路由转过来的区号 电话号码 
  const areaCode = useRoute().params.areaCode;
  const user_phone = useRoute().params.user_phone;
  
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  
  const onClickLeft = () => history.back();
  
  const code = ref(new Array(4).fill('')); // 4位验证码
  
  const handleInput = (index) => {
    logCode(); // 打印验证码
    if (index < code.value.length - 1) {
      document.querySelectorAll('.digit-input')[index + 1].focus();
    }
  };
  
  //删除触发的函数
  const onBackspace = (index) => {
    if (index > 0 && !code.value[index]) {
      document.querySelectorAll('.digit-input')[index - 1].focus();
    }
  };
  
  const logCode = () => {
    console.log(code.value.join(''));
    //当输完四位时
    if(code.value[3]!=''){
      //判断是否一样
      if (code.value.join('')==v_code.value) {
        //验证码验证成功，发送登录异步请求
        api.postReq('/kuser/codeLogin',{areacode:areaCode,userPhone:user_phone}).then(res=>{
          let result = res.data
          if(result.code==1){
            //登录成功，存储用户信息
            localStorage.setItem("admin",JSON.stringify(result.data));
            localStorage.setItem("token",result.data.token);
            //跳转到主页
            router.push('/Demo4')
          }else{
            showToast('网络错误');
          } 
        })
      }else{
        //验证码错误，清空验证码，弹窗提示错误
        code.value=new Array(4).fill('')
        showToast('输入错误');
        // 将光标聚焦到第一个输入框
        setTimeout(() => {
          document.querySelector('.digit-input').focus();
        }, 100); // 100毫秒的延时可以确保输入框已清空
      }
    }
  };
  
  const countdown = ref(60);
  const isResendDisabled = ref(true);
  
  //清空倒计时
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
  
  //重新获取验证码函数
  const resendCode = () => {
    if (!isResendDisabled.value) {
      // alert("验证码已重新发送！");
      showToast('验证码已重新发送');
      api.postReq('/kuser/getCode').then(res=>{
        v_code.value = res.data.data
      })
      startCountdown();
    }
  };
  
  const reportIssue = () => {
    // alert("请联系我们的客服以解决此问题。");
    showToast('请联系我们的客服以解决此问题');
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
  