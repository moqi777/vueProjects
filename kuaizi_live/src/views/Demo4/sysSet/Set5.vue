<template>
    <van-nav-bar
  title="验证旧手机号"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      :model-value="phoneNumber"
      name="phone"
      label="旧手机"
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
  <!-- </van-cell-group> -->
  <div style="margin: 16px;">
    <van-button round block type="danger" native-type="submit">
      完成验证
    </van-button>
  </div>
  <!-- 收不到验证码？ -->
  <div style="text-align: center;">
     <router-link to="/客服连接" style="color:blue;">收不到验证码？</router-link>
  </div>
</van-form>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router";

const router=useRouter()
const phoneNumber = ref('13566668888');
const verificationCode=ref('')

// 获取验证码逻辑
function sendVerificationCode() {
  // 这里应该添加发送验证码的逻辑
  console.log('发送验证码');
}
// 表单提交逻辑
const onSubmit = (values) => {
  console.log('submit', values);
  if(verificationCode.value!='')
  {
router.push('/set6')
  }
}
const onClickLeft = () => history.back();
</script>

<style scoped>
</style>