<template>
    <!-- 标题 -->
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" size="26" color="black"  @click="onClickLeft"/>
      </template>
    </van-nav-bar>
  
    <!-- 整体容器 -->
    <div class="container">
      <div class="title">注册筷子生活</div>
      <div class="subtitle">
        已有账户！去
        <a  @click="navigateTo('/reg')" class="policy-link">登录</a>
      </div>
  
      <!-- 输入区域 -->
      <van-row class="input-container">
        <van-col span="24">
          <!-- 手机号输入 -->
          <div class="input-wrapper">
            <a @click="showPopup" href="javascript:void(0);" class="code-button">{{ code }}</a>
            <van-cell-group inset class="input-group">
              <van-field v-model="value" placeholder="请输入手机号" class="input-field" />
            </van-cell-group>
          </div>
  
          <!-- 密码输入 -->
          <van-cell-group v-if="status !== 1" inset class="input-group">
            <van-field
              v-model="password"
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="请输入密码"
              class="input-field"
            >
              <template #left-icon>
                <van-icon
                  :name="isPasswordVisible ? 'eye' : 'eye-o'"
                  @click="togglePasswordVisibility"
                  class="toggle-password-visibility-icon"
                />
              </template>
              <template #button>
                <a href="/忘记密码" class="forget-password-link">忘记密码</a>
              </template>
            </van-field>
          </van-cell-group>
        </van-col>
      </van-row>
  
      <!-- 弹出层 -->
      <van-popup round v-model:show="show" position="bottom" class="popup">
        <div class="popup-header">选择国际区号</div>
        <div class="popup-body">
          <button @click="selectCode('+86')" class="dialog-button">+86</button>
          <button @click="selectCode('+63')" class="dialog-button">+63</button>
          <button @click="selectCode('取消')" class="dialog-button">取消</button>
        </div>
      </van-popup>
  
      <!-- 协议政策 -->
      <div class="policy-container">
        <el-checkbox v-model="checked1" size="large" class="policy-text">
          我已阅读并同意
          <a @click="navigateTo('/one')" class="policy-link">筷子生活用户协议</a>
          和
          <a @click="navigateTo('/two')" class="policy-link">筷子生活隐私政策</a>
        </el-checkbox>
      </div>
  
      <!-- 获取验证码按钮 -->
      <van-button type="primary" v-if="value!=''&&checked1==true&&value.length>=10" round size="large" class="verification-button" @click="navigateTo('/code')">获取短信验证码</van-button>
      <van-button type="primary" v-if="value==''||checked1==false||value.length<10" disabled  round size="large" class="verification-button" @click="navigateTo('/code')">获取短信验证码</van-button>
    </div>
  
    <!-- 其他登录方式 -->
    <div class="alternative-login">
      其他登录方式
      <div class="icon-container">
        <van-icon name="wechat" size="32" color="#1AAD19" @click="handleWechatLogin" />
        <van-icon name="qq" size="32" color="#007AFF" @click="handleQqLogin" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const onClickLeft = () => history.back();
  // 路由实例
  const router = useRouter();
  
  // 状态管理
  const status = ref(1);
  const value = ref('');
  const show = ref(false);
  const code = ref('+86'); // 默认显示+86
  const password = ref('');
  const isPasswordVisible = ref(false);
  const checked1 = ref(false);
  
  // 切换登录方式
  const toggleLoginMethod = () => {
    status.value = status.value === 1 ? 0 : 1;
  };
  
  // 切换密码可见性
  const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  
  // 显示选择国际区号弹出层
  const showPopup = () => {
    show.value = true;
  };
  
  // 选择国际区号
  const selectCode = (selectedCode) => {
    if (selectedCode !== '取消') {
      code.value = selectedCode;
    }
    show.value = false; // 关闭弹出层
  };
  
  // 登录方式处理函数
  const handleWechatLogin = () => {
    console.log('微信登录');
  };
  
  const handleQqLogin = () => {
    console.log('QQ登录');
  };
  
  // 跳转至相关页面
  const navigateTo = (path) => {
      //如果是获取验证码界面跳转
      if(path=='/code'){
      //判断电话号码的正确性
      // 正则表达式用于验证中国电话号码格式
      const chinaRegex = /^(\+86)?1[3-9]\d{9}$/;
      // 正则表达式用于验证菲律宾电话号码格式
      const philippinesRegex = /^(\+63)?9\d{9}$/;
      // 验证是否为中国或菲律宾的号码
      if (!chinaRegex.test(value.value)&&code.value=='+86') {
        showToast('请输入正确手机号');
        return
      } else if (!philippinesRegex.test(value.value)&&code.value=='+63') {
        showToast('请输入正确手机号');
        return
      } 
      //路由传值，将区号 电话号码
      router.push(path+'/'+code.value+'/'+value.value)
      return;
    }
    router.push(path);
  };
  </script>
  
  <style scoped>
  /* 基本布局样式 */
  .container {
    padding: 20px;
  }
  
  .title {
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 16px;
  }
  
  .subtitle {
    margin-bottom: 12px;
  }
  
  /* 输入框和按钮布局 */
  .input-container {
    margin-top: 20px;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 0 4px;
  }
  
  .code-button {
    padding: 8px 12px;
    margin-right: 4px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: #ff4724;
  }
  
  .input-group {
    flex-grow: 1;
  }
  
  .input-field {
    border: none;
    padding-left: 8px;
  }
  
  /* 密码输入框图标 */
  .toggle-password-visibility-icon {
    font-size: 20px;
    cursor: pointer;
    margin-right: 8px;
  }
  
  /* 弹出层样式 */
  .popup {
    height: 30%;
  }
  
  .popup-header {
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
  }
  
  .popup-body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: calc(100% - 56px);
  }
  
  .dialog-button {
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    flex: 1;
    color: rgb(0, 0, 0);
    text-align: center;
  }
  
  /* 协议政策样式 */
  .policy-container {
    padding: 15px;
  }
  
  .policy-text {
    font-size: 14px;
    color: #b2b2b2;
  }
  
  .policy-link {
    color: #ff4724;
    text-decoration: none;
  }
  
  /* 验证码按钮样式 */
  .verification-button {
    background-color: #ff4724;
  }
  
  /* 顶部导航栏样式 */
  .nav-right-link {
    color: black;
    font-size: 20px;
  }
  
  /* 忘记密码链接样式 */
  .forget-password-link {
    color: #ff4724;
    font-size: 14px;
    text-decoration: none;
    margin-left: 8px;
  }
  
  /* 其他登录方式样式 */
  .alternative-login {
    text-align: center;
    margin-top: 30px;
    color: #666;
    font-size: 16px;
  }
  
  .icon-container {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .icon-container .van-icon {
    cursor: pointer;
  }
  </style>
  