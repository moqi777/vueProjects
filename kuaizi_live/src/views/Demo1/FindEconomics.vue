<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="家政"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 基本信息部分 -->
    <div class="section">
      <div class="section-title">基本信息</div>
      <van-cell-group>
        <van-field v-model="nickname" label="称呼" placeholder="请输入称呼" required />
        <van-cell title="性别" is-link @click="show" required>
          <span class="placeholder">{{ gender ? gender : '请选择性别' }}</span>
        </van-cell>
        <van-cell title="地区" is-link @click="show2" required>
          <span class="placeholder">{{ region ? region : '请选择地区' }}</span>
        </van-cell>
        <van-field v-model="address" label="详细地址" placeholder="请输入详细地址" required />
        <van-field v-model="phone" label="联系电话" placeholder="请输入手机号" required />
        <van-field v-model="wechat" label="微信号" placeholder="请输入微信号" />
        <van-field v-model="telegram" label="Telegram号" placeholder="请输入Telegram号" />
      </van-cell-group>
    </div>

    <!-- 房屋信息部分 -->
    <div class="section">
      <div class="section-title">房屋信息</div>
      <van-cell-group>
        <van-field v-model="area" label="房屋面积" placeholder="请输入房屋面积m²" required />
        <van-field v-model="rooms" label="房间" placeholder="请输入几个房间" required />
        <van-field v-model="floor" label="楼层" placeholder="请输入几楼" required />
      </van-cell-group>
    </div>
    <!-- 留言 -->
     <div><div class="section-title">备注信息</div>
      <van-cell-group inset>
  <van-field
    v-model="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="200"
    placeholder="请输入50字以内的备注说明"
    show-word-limit
  />
</van-cell-group>
     </div>

    <!-- 提交按钮 -->
    <van-button type="primary" block @click="onSubmit">提交</van-button>

    <!-- 性别弹出层 -->
    <van-popup v-model:show="showPopup" position="bottom" :style="{ height: '30%' }">
      <div>
        <van-cell>
          <van-col class="sex-option" @click="selectGender('男')">男</van-col>
        </van-cell>
        <van-cell>
          <van-col class="sex-option" @click="selectGender('女')">女</van-col>
        </van-cell>
        <van-cell>
          <van-col class="sex-option" @click="cancelSelection">取消</van-col>
        </van-cell>
      </div>
    </van-popup>
    <!-- 地区弹出层 -->
    <van-popup v-model:show="showPopup2" position="bottom" :style="{ height: '30%' }">
      <div>
        <van-cell>
          <van-col class="sex-option" @click="selectRegion('江西')">江西</van-col>
        </van-cell>
        <van-cell>
          <van-col class="sex-option" @click="selectRegion('上海')">上海</van-col>
        </van-cell>
        <van-cell>
          <van-col class="sex-option" @click="selectRegion('广州')">广州</van-col>
        </van-cell>
        <van-cell>
          <van-col class="sex-option" @click="cancelSelection2">取消</van-col>
        </van-cell>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref,createApp } from 'vue';
import { useRouter } from 'vue-router';
import { showToast,Area } from 'vant';
import  api  from '../../api/index';

const test1 =(nickname)=>{
api.postReq('/',nickname).then(res=>{
  let result = res.data;
        if(result.code ==1){
          //成功提示
          showSuccessToast(result.msg);
          router.push("/economics")
}})}
const router = useRouter();
const showPopup = ref(false);
const showPopup2 = ref(false);
const nickname = ref('');
const gender = ref('');
const region = ref('');
const address = ref('');
const phone = ref('');
const wechat = ref('');
const telegram = ref('');
const area = ref('');
const rooms = ref('');
const floor = ref('');

const onClickLeft = () => router.back();

// 显示弹出层
const show = () => {
  showPopup.value = true;
};
const show2 = () => {
  showPopup2.value = true;
};

// 选择性别并关闭弹出层
const selectGender = (selectedGender) => {
  gender.value = selectedGender;
  showPopup.value = false;
};
// 选择地区并关闭弹出层
const selectRegion = (selectRegion) => {
  region.value = selectRegion;
  showPopup2.value = false;
};

// 取消选择
const cancelSelection = () => {
  showPopup.value = false;
};
const cancelSelection2 = () => {
  showPopup2.value = false;
};

const onSubmit = () => {
  if (!nickname.value || !gender.value || !region.value || !address.value || !phone.value) {
    showToast('请填写完整的基本信息');
    return;
  }

  const formData = {
    nickname: nickname.value,
    gender: gender.value,
    region: region.value,
    address: address.value,
    phone: phone.value,
    wechat: wechat.value,
    telegram: telegram.value,
    area: area.value,
    rooms: rooms.value,
    floor: floor.value,
  };

  console.log('提交表单数据:', formData);
  test1(formData)
  showToast('表单提交成功');
  //地区弹出框
  const app = createApp();
  app.use(Area);
};
</script>

<style>
.section {
  margin: 10px 0;
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.placeholder {
  color: #999;
}

.van-field__label {
  font-size: 16px;
}

.van-field__input,
.placeholder {
  font-size: 14px;
  color: #333;
}

.van-button {
  background: linear-gradient(to right, #a4508b, #5f0a87);
  color: #fff;
  border-radius: 50px;
}

.sex-option {
  text-align: center;
  padding: 10px 0;
  color: #333;
  font-weight: bold;
}
</style>
