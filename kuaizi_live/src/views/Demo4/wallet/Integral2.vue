<template>
 <van-nav-bar
  title="积分排行榜"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<van-list>
    <van-row style="text-align: center;">
        <van-col span="6">排名</van-col>
        <van-col span="12">手机号</van-col>
        <van-col span="6">积分值</van-col>
    </van-row>
        <van-cell v-for="(item, index) in coupons" :key="index" class="coupon-item">
          <div class="coupon-info">
            <van-row style="text-align: center;">
            <van-col span="6">{{ index+1 }}</van-col>
        <van-col span="12">{{ item.phone }}</van-col>
        <van-col span="6">{{ item.integral }}</van-col>
        </van-row>
          </div>
        </van-cell>
    </van-list>
</template>

<script setup>
import {ref} from "vue"

const onClickLeft = () => history.back();
const coupons = [
    {
      id:0,
      phone: 12312312312,
      integral: 3344
    },
    {
      id:1,
      phone: 12345678910,
      integral: 2345
    },
    {
      id:2,
      phone: 12456723456,
      integral: 1212
    },
    ]
</script>

<style scoped>
</style>