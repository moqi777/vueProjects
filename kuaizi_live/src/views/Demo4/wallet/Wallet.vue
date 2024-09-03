<template >
    <van-nav-bar
  title="账户余额"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 账户余额信息 -->
 <div class="wallet-div">
    <van-cell-group inset>
        <van-col class="YE">
            ¥{{wallet}}
        </van-col>
        <van-row>
        <van-col  span="8"/> 
        <van-col  span="8">
        <van-field
        class="zhanghu"
        v-model:model-value="st"
        is-link to="/account"
        readonly
      />
    </van-col>
        </van-row>
    </van-cell-group>
</div>

<!-- 更多服务 -->
 <div class="wallet1-div">
    <van-col>更多服务</van-col>
    <van-row>
        <van-col  span="11" class="img1" @click="router.push('/account2')"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img2" @click="router.push('/外卖')"></van-col>
        <van-col  span="1"></van-col>
    </van-row>
    <!-- <van-col>&nbsp;</van-col> -->
    <van-row style="height: 130px;">
        <van-col  span="11" class="img3" @click="router.push('/签证')"></van-col>
        <van-col  span="1"></van-col>
        <van-col  span="11" class="img4" @click="router.push('/商城')"></van-col>
        <van-col  span="1"></van-col>
    </van-row>
 </div>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router";

const st=ref('账单明细')
//余额
const wallet=ref(0)
const router=useRouter()
const onClickLeft = () => history.back();
</script>

<style scoped>
.zhanghu{
    text-align: center;
    justify-content: center;
    font-size: 15px; 
    color: #000000; 
    margin-top: 0px;
}
.YE{
    text-align: center;
    justify-content: center; 
    font-size: 30px; 
    color: #000000;
    margin-top: 20px;
}
.wallet-div{
    width: 95%;
        height: 130px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        box-shadow: 0px 0px 1px gray;
        border-radius: 5px;
}
.wallet1-div{
    width: 95%;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    box-shadow: 0px 0px 1px gray;
    border-radius: 5px;
    font-size: 20px;
}
.img1{
    width: 90%;
    height: 100px;
    margin:auto;
    background-image: url(../../../assets/app_img/wallet_w1.png);
    background-size: 100% 100% ;
}
.img2{
    width: 90%;
    height: 100px;
    margin:auto;
    background-image: url(../../../assets/app_img/wallet_w2.png);
    background-size: 100% 100% ;
}
.img3{
    width: 90%;
    height: 100px;
    margin:auto;
    background-image: url(../../../assets/app_img/wallet_w3.png);
    background-size: 100% 100% ;
}
.img4{
    width: 90%;
    height: 100px;
    margin:auto;
    background-image: url(../../../assets/app_img/wallet_w4.png);
    background-size: 100% 100% ;
}
</style>