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
            <van-field v-model="phoneNumber" placeholder="请输入手机号" class="input-field" />
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
          <van-button type="primary" round size="small" class="get-code-button" @click="getCode">
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

const router = useRouter();

const phoneNumber = ref('');
const verificationCode = ref('');
const password = ref('');
const show = ref(false);
const code = ref('+86'); // 默认显示+86

// 返回上一步
const onClickLeft = () => {
  history.back();
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
  alert('验证码已发送');
};

// 跳转至相关页面
const navigateTo = (path) => {
  router.push(path);
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
