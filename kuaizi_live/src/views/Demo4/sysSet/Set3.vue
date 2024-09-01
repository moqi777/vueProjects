<template>
    <van-nav-bar
  title="修改密码"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>

  <van-form class="password-update-page" @submit="onSubmit">
    <!-- 手机号 -->
    <van-cell-group inset>
      <van-field
        :model-value="phoneNumber"
        name="phone"
        label="手机号"
        type="tel"
        maxlength="11"
        readonly
      />
    </van-cell-group>
    <!-- v-model="phoneNumber" -->

    <!-- 验证码 -->
    <van-cell-group inset>
      <van-field
        v-model="verificationCode"
        name="验证码"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="sendVerificationCode">获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <!-- 新密码 -->
    <van-cell-group inset>
      <van-field
        v-model="newPassword"
        name="newPassword"
        label="输入新密码"
        placeholder="密码为8~16位数字和字母的组合"
        :type="showPassword ? 'text' : 'password'"
        :right-icon="showPassword ? 'eye-o' : 'closed-eye'"
        @click-right-icon="toggleShowPassword"
      />
    </van-cell-group>

    <!-- 确认按钮 -->
    <van-button round block type="danger" native-type="submit">
      确认
    </van-button>

    </van-form>
    <!-- 收不到验证码？ -->
  <div style="text-align: center;">
     <router-link to="/客服连接" style="color:blue;">收不到验证码？</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const onClickLeft = () => history.back();

// 表单数据绑定
const phoneNumber = ref('13566668888');
const verificationCode = ref('');
const newPassword = ref('');

// 控制密码是否可见
const showPassword = ref(false);
function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}

// 获取验证码逻辑
function sendVerificationCode() {
  // 这里应该添加发送验证码的逻辑
  console.log('发送验证码');
}

// 确认更新密码逻辑
const onSubmit = (values) => {
  console.log('submit', values);
}
</script>

<style scoped>
/* 样式可以根据需要进行调整 */
.password-update-page {
  padding: 20px;
}
</style>