<template>
    <van-nav-bar
  title="绑定新手机号"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-row>
  <van-col span="6">
    <van-field
        :model-value="Num"
        readonly
        @click="show" 
      />
    </van-col>
    <van-col span="18">
    <van-field
        :model-value="phoneNumber"
        name="phone"
        readonly
      />
      </van-col>
      
    </van-row>
    </van-cell-group>
<!-- 弹出层 -->
<van-popup
    v-model:show="showPopup"
    position="bottom"
    :style="{ height: '30%' }"
  >
    <div>
        <van-col class="sex-sex">选择国际区号</van-col>
        <van-cell-group>
      <van-cell >
        <van-col class="sex-sex" v-model="gender" @click="genders2">+86</van-col>
      </van-cell>
      <van-cell >
        <van-col class="sex-sex" v-model="gender" @click="genders">+63</van-col>
      </van-cell>
    </van-cell-group>
      <van-cell >
        <van-col class="sex-sex" @click="show2">取消</van-col>
      </van-cell>
      
    </div>
  </van-popup>

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

const Num=ref('+86')
const showPopup=ref(false)
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
//弹出层
const show =()=>{
  showPopup.value=true
}
const show2=()=>{
  showPopup.value=false
}
const genders=()=>{
  Num.value='+63'
  showPopup.value=false
}
const genders2=()=>{
  Num.value='+86'
  showPopup.value=false
}

const onClickLeft = () => history.back();
</script>

<style scoped>
.sex-sex{
  text-align: center;
  justify-content: center;
  padding: auto;
}
</style>