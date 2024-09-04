<template>
  <!-- 标题 -->
  <van-nav-bar @click-left="onClickLeft" title="找回密码">
    <template #left>
      <van-icon name="arrow-left" size="26" color="black" @click="onClickLeft" />
    </template>
  </van-nav-bar>

  <!-- 整体容器 -->
  <div class="container">
    <!-- 输入区域 -->
    <van-row class="input-container">
      <van-col span="24">
        <!-- 手机号输入 -->
        <label class="input-label">输入您的手机号</label>
        <div class="input-wrapper">
          <a @click="showPopup" href="javascript:void(0);" class="code-button">{{ code }}</a>
          <van-cell-group inset class="input-group">
            <van-field v-model="phoneNumber" placeholder="请输入手机号" class="input-field" :readonly/>
          </van-cell-group>
        </div>
      </van-col>

      <van-col span="24">
        <!-- 手机验证码输入 -->
        <label class="input-label">手机验证码</label>
        <div class="input-wrapper verification-input">
          <van-cell-group inset class="input-group">
            <van-field v-model="verificationCode" placeholder="验证码" class="input-field" />
          </van-cell-group>
          <van-button v-if="phoneNumber!=''&&phoneNumber.length>=10" type="primary" round size="small" class="get-code-button" @click="getCode">
            获取验证码
          </van-button>
          <van-button v-if="phoneNumber==''||phoneNumber.length<10" disabled type="primary" round size="small" class="get-code-button">
            获取验证码
          </van-button>
        </div>
      </van-col>

      <van-col span="24">
        <!-- 输入新密码 -->
        <label class="input-label">输入新密码</label>
        <div class="input-wrapper">
          <van-cell-group inset class="input-group">
            <van-field v-model="password" placeholder="密码为8~16位数字和字母的组合" class="input-field" />
          </van-cell-group>
        </div>
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

    <!-- 确定按钮 -->
    <van-button
      type="primary"
      round
      size="large"
      class="confirm-button"
      @click="navigateTo('/code')"
    >
      确定
    </van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api/index'
import { showToast } from 'vant';

const router = useRouter();

const phoneNumber = ref('');//手机号
const verificationCode = ref('');//验证码
const v_code = ref()//后端传来的验证码
const password = ref('');//密码
const show = ref(false);
const code = ref('+86'); // 默认显示+86 //区号
const readonly = ref(false)//是否锁住手机号码输入框

// 返回登录页面
const onClickLeft = () => {
  router.push('/login')
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

// 获取验证码的处理函数
const getCode = () => {
  //判断电话号码的正确性
  // 正则表达式用于验证中国电话号码格式
  const chinaRegex = /^(\+86)?1[3-9]\d{9}$/;
  // 正则表达式用于验证菲律宾电话号码格式
  const philippinesRegex = /^(\+63)?9\d{9}$/;
  // 验证是否为中国或菲律宾的号码
  if (!chinaRegex.test(phoneNumber.value)&&code.value=='+86') {
    showToast('请输入正确手机号');
    return
  } else if (!philippinesRegex.test(phoneNumber.value)&&code.value=='+63') {
    showToast('请输入正确手机号');
    return
  } 
  api.postReq('/kuser/getCode').then(res=>{
      if (res.data.code==0) {
        showToast('网络错误');
        return
      }
      showToast('验证码已发送');
      v_code.value = res.data.data
      //把手机号码输入框锁定 防止用户修改
      readonly.value = true
  })
};

// 跳转至相关页面
const navigateTo = (path) => {
  //判断电话号码的正确性
  // 正则表达式用于验证中国电话号码格式
  const chinaRegex = /^(\+86)?1[3-9]\d{9}$/;
  // 正则表达式用于验证菲律宾电话号码格式
  const philippinesRegex = /^(\+63)?9\d{9}$/;
  // 验证是否为中国或菲律宾的号码
  if (!chinaRegex.test(phoneNumber.value)&&code.value=='+86') {
    showToast('请输入正确手机号');
    return
  } else if (!philippinesRegex.test(phoneNumber.value)&&code.value=='+63') {
    showToast('请输入正确手机号');
    return
  } 
  if(verificationCode.value==''){
    showToast('请输入验证码');
    return;
  }
  if (v_code.value!=verificationCode.value) {
    showToast('验证码错误');
    return
  }
  if(password.value==''){
    showToast('请输入新密码');
    return;
  }
  if(password.value.length<6){
    showToast('密码至少六位数');
    return;
  }
  //发送异步请求修改密码
  api.postReq('/kuser/updatePw',{userPhone:phoneNumber.value,password:password.value,areacode:code.value}).then(res=>{
    showToast(res.data.msg);
    if(res.data.code==1){
      //登录成功跳转登录页面
      router.push('/login')
    }
  })
  //router.push(path);
};
</script>

<style scoped>
/* 基本布局样式 */
.container {
  padding: 20px;
}

/* 输入框和按钮布局 */
.input-container {
  margin-top: 20px;
}

.input-label {
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 4px;
  margin-bottom: 20px;
}

.code-button {
  padding: 8px 12px;
  margin-right: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
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

.verification-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.get-code-button {
  flex-shrink: 0;
  margin-left: 8px;
  background-color: #ff4724;
  color: white;
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
  color: black;
  text-align: center;
}

/* 确定按钮样式 */
.confirm-button {
  background-color: #ff4724;
  margin-top: 20px;
  width: 100%;
}
</style>
