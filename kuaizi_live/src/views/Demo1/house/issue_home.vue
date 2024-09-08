<template>
<van-sticky>
    <van-nav-bar
    title="发布选择"
    left-arrow
    @click-left="onClickLeft"
    style="color: gray;"
    />
</van-sticky>
<div class="big">
    <van-row @click="router.push('/issue1')">
        <van-col span="6" class="img">
            <van-image
            width="3rem"
            height="3rem"
            radius="10px"
            fit="cover"
            :src="getImageUrl('/app_img/issue_home1.png')"
            />
        </van-col>
        <van-col span="14" class="text_div">
            <span>出租 <svg-icon iconName="icon-mianfei" class="icon"/></span><br>
            <span style="font-size: 13px;color: gray;line-height: 35px;">我想出租</span>
        </van-col>
        <van-col span="4" class="right_div"><van-icon name="arrow" color="gray"/></van-col>
    </van-row>

    <van-row @click="router.push('/issue2')">
        <van-col span="6" class="img">
            <van-image
            width="3rem"
            height="3rem"
            radius="10px"
            fit="cover"
            :src="getImageUrl('/app_img/issue_home2.png')"
            />
        </van-col>
        <van-col span="14" class="text_div">
            <span>求租 <svg-icon iconName="icon-mianfei" class="icon"/></span><br>
            <span style="font-size: 13px;color: gray;line-height: 35px;">我想求租</span>
        </van-col>
        <van-col span="4" class="right_div"><van-icon name="arrow" color="gray"/></van-col>
    </van-row>

    <van-row @click="router.push('/issue3')">
        <van-col span="6" class="img">
            <van-image
            width="3rem"
            height="3rem"
            radius="10px"
            fit="cover"
            :src="getImageUrl('/app_img/issue_home3.png')"
            />
        </van-col>
        <van-col span="14" class="text_div">
            <span>求购 <svg-icon iconName="icon-mianfei" class="icon"/></span><br>
            <span style="font-size: 13px;color: gray;line-height: 35px;">我想求购</span>
        </van-col>
        <van-col span="4" class="right_div"><van-icon name="arrow" color="gray"/></van-col>
    </van-row>

    <van-row @click="router.push('/issue4')">
        <van-col span="6" class="img">
            <van-image
            width="3rem"
            height="3rem"
            radius="10px"
            fit="cover"
            :src="getImageUrl('/app_img/issue_home4.png')"
            />
        </van-col>
        <van-col span="14" class="text_div">
            <span>出售 <svg-icon iconName="icon-mianfei" class="icon"/></span><br>
            <span style="font-size: 13px;color: gray;line-height: 35px;">我想出售</span>
        </van-col>
        <van-col span="4" class="right_div"><van-icon name="arrow" color="gray"/></van-col>
    </van-row>
</div>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => router.push('/house/house1/{}');//返回上一级

//用于解析图片本地地址
const getImageUrl=(imgPath)=> {
    return require('../../../assets'+imgPath); 
}
</script>

<style scoped>
.big{
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.big ::v-deep .van-row{
    width: 85%;
    height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background-color: #F4F4F4;
    margin-top: 15px;
}
.big ::v-deep .van-col{
    width: 85%;
    height: 80%;
}
.img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.text_div{
    padding-top: 13px;
}
.right_div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon{
    width: 30px;
    height: 20px;
}
</style>
