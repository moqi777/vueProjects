<template>
<van-nav-bar
    title="优惠券"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    />
    <div>
      <!-- 标签页 -->
      <van-tabs v-model:active="activeTab" color="#1989fa">
        <van-tab title="全部">
            <!-- 券列表 -->
      <div class="coupon-list">
        <van-list>
        <van-cell v-for="(item, index) in coupons" :key="index" class="coupon-item">
          <div class="coupon-info">
            <span class="amount">¥{{ item.amount }}</span>
            <span class="type">{{ item.type }}</span>
            <button @click="useCoupon(item)">去使用</button>
          </div>
          <p class="date-range">{{ item.dateRange }}</p>
          <p class="rules">使用规则</p>
        </van-cell>
    </van-list>
    </div>
        </van-tab>
        <van-tab title="平台券">
            <!-- 券列表 -->
      <div class="coupon-list">
        <van-list>
        <van-cell v-for="(item, index) in coupons" :key="index" class="coupon-item"
         v-show="item.id==0" >
          <div class="coupon-info" >
            <span class="amount">¥{{ item.amount }}</span>
            <span class="type">{{ item.type }}</span>
            <button @click="useCoupon(item)">去使用</button>
          </div>
          <p class="date-range" >{{ item.dateRange }}</p>
          <p class="rules" >使用规则</p>
        </van-cell>
    </van-list>
    </div>
        </van-tab>
        <van-tab title="店铺券">
             <!-- 券列表 -->
      <div class="coupon-list">
        <van-list>
        <van-cell v-for="(item, index) in coupons" :key="index" class="coupon-item"
         v-show="item.id==1" >
          <div class="coupon-info" >
            <span class="amount">¥{{ item.amount }}</span>
            <span class="type">{{ item.type }}</span>
            <button @click="useCoupon(item)">去使用</button>
          </div>
          <p class="date-range" >{{ item.dateRange }}</p>
          <p class="rules" >使用规则</p>
        </van-cell>
    </van-list>
    </div>
        </van-tab>
      </van-tabs>
  
      
  
      <!-- 历史优惠券按钮 -->
      <div class="history-coupons">
        <a href="#">历史优惠券</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // 模拟数据
  const coupons = [
    {
      id:0,
      amount: 99,
      type: '平台券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    {
      id:1,
      amount: 88,
      type: '店铺券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    {
      id:0,
      amount: 77,
      type: '平台券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    {
      id:0,
      amount: 50,
      type: '平台券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    {
      id:1,
      amount: 88,
      type: '店铺券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    {
      id:1,
      amount: 77,
      type: '店铺券',
      dateRange: '2024.08.30 17:40至2024.09.14 17:40',
    },
    // ...其他券的数据
  ];
  
  const roouter=useRouter()
  // 当前激活的标签页索引
  const activeTab = ref(0);
  const onClickLeft = () => history.back();
  
  const useCoupon=(coupon)=> {
    console.log('使用优惠券:', coupon);
    roouter.push('/商城界面')
  }
  </script>
  
  <style scoped>
  .coupon-list {
    list-style-type: none;
    padding: 0;
  }
  
  .coupon-item {
    border-bottom: 1px solid #eee;
    padding: 10px;
  }
  
  .coupon-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .amount {
    font-size: 24px;
    color: red;
  }
  
  .type {
    font-size: 16px;
  }
  
  button {
    background-color: orange;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 20px;
  }
  
  .date-range {
    text-align: left;
    margin-top: 8px;
    font-size: 12px;
    color: gray;
  }
  
  .rules {
    text-align: left;
    margin-top: 8px;
    font-size: 12px;
    color: blue;
  }
  
  .history-coupons {
    text-align: center;
    margin-top: 20px;
  }
  
  .history-coupons a {
    color: blue;
    text-decoration: underline;
  }
  </style>