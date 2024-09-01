<template>
    <van-nav-bar
  title="编辑个人资料"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<van-form class="password-update-page" @submit="onSubmit">
  <!-- 头像 -->
    <van-row>
    <van-col span="18" name="touxiang" class="touxiang">头像</van-col>
    <van-col span="6">
      <van-image
    round
    width="90px"
    height="90px"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  />
    </van-col>
  </van-row>
      
    <!-- 用户名 -->
    <van-cell-group inset>
      <van-field
        :model-value="userName"
        label="用户名"
        type="tel"
        name="userName"
        readonly
      />
    </van-cell-group>

    <!-- 手机号 -->
    <van-cell-group inset>
      <van-field
        v-model="phoneNumber"
        center
        clearable
        name="phoneNumber"
        label="手机号"
        readonly
      >
      <template #button>
          <van-button size="small"  plain type="primary" @click="sendVerificationCode">修改手机</van-button>
        </template>
        </van-field>
    </van-cell-group>

    <!-- 昵称 -->
    <van-cell-group inset>
      <van-field
        :model-value="nickname"
        label="昵称"
        name="nickname"
      />
    </van-cell-group>
    
    <!-- 性别 -->
    <van-cell-group inset >
      <van-row>
  <van-col span="18">
    <van-field
        label="性别"
        readonly=""
        @click="show" 
      />
    </van-col>
    <van-col span="6">
    <van-field
        :model-value="gender"
        name="sex"
        is-link
        readonly=""
        @click="show" 
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
      <van-cell >
        <van-col class="sex-sex" v-model="gender" @click="genders2">男</van-col>
      </van-cell>
      <van-cell >
        <van-col class="sex-sex" v-model="gender" @click="genders">女</van-col>
      </van-cell>
      <van-cell >
        <van-col class="sex-sex" @click="show2">取消</van-col>
      </van-cell>
      
    </div>
  </van-popup>

     <!-- 邮件 -->
     <van-cell-group inset>
      <van-field
        v-model:model-value="email"
        label="Email"
        name="email"
        placeholder="设置邮箱方便找回密码"
      />
    </van-cell-group>
    <!-- 确认按钮 -->
    <van-button round block type="danger" native-type="submit">
      保存
    </van-button>

    <!-- 收不到验证码？ -->
  </van-form>
  <div style="text-align: right;">
     <router-link to="/客服连接" style="color:blue;">收不到验证码？</router-link>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const onClickLeft = () => history.back();

// 表单数据绑定
const email=ref('')
const gender=ref('男')
const nickname=ref('新用户')
const userName=ref('66d1938150354')
const phoneNumber = ref('13566668888');
// const verificationCode = ref('');
// const newPassword = ref('');
// const confirmPassword=ref('')
const router=useRouter()
//性别选项
const genders=()=>{
  gender.value='女'
  showPopup.value=false
}
const genders2=()=>{
  gender.value='男'
  showPopup.value=false
}


const show =()=>{
  showPopup.value=true
}
const show2=()=>{
  showPopup.value=false
}
//弹出层

const showPopup=ref(false)

// 控制密码是否可见
const showPassword = ref(false);
const Password=ref(false)
function ShowPassword() {
  Password.value = !Password.value;
}
function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}

// 获取验证码逻辑
function sendVerificationCode() {
  // 跳转页面
  console.log('修改手机');
  router.push("/set5")
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
.touxiang{
  padding: 33px;
}
.sex-sex{
  
  text-align: center;
  justify-content: center;
  padding: 20px;
}
</style>