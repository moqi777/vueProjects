<template>
  <van-nav-bar
    title="我的订单"
    right-text="筛选"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #left>
      <van-icon name="arrow-left" style="color: black;" size="18" />
    </template>
    <template #right>
      <van-icon style="color: black;" size="18">
        <van-cell name="font-o" title="筛选" @click="showPopup" />
      </van-icon>
    </template>
  </van-nav-bar>

  <van-tabs
    v-model:active="active"
    swipeable
    color="orange"
    sticky
    scrollable
    @change="onChange"
  >
    <van-tab title="全部" name="1">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="待付款" name="2">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="待收货" name="3">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="待使用" name="4">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="待评价" name="5">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="退款/售后" name="6">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
    <van-tab title="全部" name="1">
      <p v-if="isObjectEmpty(Orderdata)">
        <img
          src="../../../assets/app_img/order_null.jpg"
          alt=""
          style="width: 100%; height: 100%;"
        />
      </p>
      <p v-else>{{ Orderdata }}</p>
    </van-tab>
  </van-tabs>

  <van-popup
    v-if="show"
    v-model:show="show"
    :style="{ height: '80%', maxHeight: '50%' }"
    position="top"
    closeable
    close-icon="arrow-left"
    close-icon-position="top-left"
    class="custom-popup"
    transition="none"
  >
    <div class="popup-content">
      <div class="popup-header">
        <h2>筛选</h2>
      </div>
      <p class="order-type-label">订单类型</p>
      <div class="buttons">
        <button>外卖</button>
        <button>商城</button>
        <button>到店</button>
        <button>签证</button>
        <button>旅游</button>
        <button>海运来菲</button>
        <button>回国件</button>
        <button>跑腿</button>
        <button>房产</button>
        <button>充值缴费</button>
      </div>
      <div class="action-buttons">
        <button class="reset-button">重置</button>
        <button class="confirm-button">确定</button>
      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { ref } from "vue";

const Orderdata = ref({});
const show = ref(false);

const showPopup = () => {
  show.value = true;
};

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
</script>

<style scoped>
.custom-popup {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
}

.popup-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.popup-header {
  background-color: #f5f5f5; 
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  padding: 10px;
  overflow-y: auto;
  flex-grow: 1; /* 占据剩余空间 */
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff; /* 设置为白色背景 */
}

button {
  background-color: #f7f1f1;
  color: black;
  border: 2px solid transparent;
  border-radius: 12px;
  height: 40px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
  white-space: nowrap;
}

button:hover {
  background-color: #f8d7da;
  border-color: #dc3545;
}

.reset-button {
  background-color: #e0e0e0;
  flex: 1;
}

.confirm-button {
  background-color: #FF4724;
  flex: 1;
}

.reset-button:hover {
  background-color: #c0c0c0;
}

.confirm-button:hover {
  background-color: #c82333;
}
</style>