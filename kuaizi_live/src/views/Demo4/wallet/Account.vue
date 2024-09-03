<template>
    <van-nav-bar
    title="账户明细"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    />
    <div v-if="account==0">
    <van-tabs v-model:active="active">
  <van-tab title="全部">
    <van-col class="img"/>
  </van-tab>
  <van-tab title="返利">
    <van-col class="img"/>
  </van-tab>
  <van-tab title="收入">
    <van-col class="img"/>
  </van-tab>
  <van-tab title="支出">
    <van-col class="img"/>
  </van-tab>
</van-tabs>
    </div>
    <div v-if="account!=0">
        <van-tabs v-model:active="active">
  <van-tab title="全部">
    具体数据
  </van-tab>
  <van-tab title="返利">
    具体数据
  </van-tab>
  <van-tab title="收入">
    具体数据
  </van-tab>
  <van-tab title="支出">
    具体数据
  </van-tab>
</van-tabs>
    </div>
</template>

<script setup>
import {ref} from "vue"

const active = ref(0);
const account=ref(0)

const onClickLeft = () => history.back();
</script>

<style scoped>
.img{
    width: 100%;
    height: 750px;
    margin:auto;
    background-image: url(../../../assets/app_img/wallet_account.png);
    background-size: 100% 100% ;
}
</style>