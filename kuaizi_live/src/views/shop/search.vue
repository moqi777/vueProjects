<template>
    <!-- 导航栏 -->
    <div style="display: flex;justify-content: space-between;align-items: center;">
        <van-nav-bar
        left-arrow
        @click-left="onClickLeft"
    />
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        style="margin-right: 3%;width:90%;"
        shape="round"
    >
        <template #action>
            <div @click="onClickButton">搜索</div>
        </template>
    </van-search>
    </div>

    <!-- 热门搜索 -->

     <van-row :gutter="[5, 5]" style="margin-left: 5px;">
        <!-- <van-col span="6">
            <van-tag plain round type="danger" text-color="red">8周年免费配送{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">零食{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">饮料{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">方便面{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">药品{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">烟酒{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">日韩进口{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">成人用品{{ 从数据库读取数据 }}</van-tag>
        </van-col>
        <van-col span="6">
            <van-tag plain round type="danger" text-color="red">电子产品{{ 从数据库读取数据 }}</van-tag>
        </van-col> -->
        <van-col span="6" v-for="hot in 9">
            <van-tag plain round type="danger" text-color="red">电子产品{{ 从数据库读取数据 }}</van-tag>
        </van-col>
    </van-row>

    <!-- 热门系列 -->
    <div>
        <Swiper>
            <SwiperSlide v-for="b in 3">
                <div style="display: flex;justify-content: space-between;">
                    <div style="width: 70%;height: 100%; margin-left: 1%; background-color: pink; border-radius: 5%;margin-top: 10px;padding-left: 1%;padding-right: 1%;padding-top: 1%;padding-bottom: 1%;" >
                        <span style="color: red;margin-left: 10px;">热门标签</span>
                        <div style="background-color: white; border-radius: 5%;padding-top: 3%;margin-top: 10px;" >
                            <div style="display: flex; justify-content: space-between;margin-top: 5%;padding-left: 1%;padding-right: 1%;padding-bottom: 1%;" v-for=" a in 3">
                                <van-image radius="20px" width="6rem" height="6rem" :src="require('../../assets/Classical.jpg')" />  
                                <div style="margin-right: 10%;margin-top: 7%;">
                                    <span style="color: black; font-size: 16px;margin-bottom: 10px;">莫小仙地方口味面食</span>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px; margin-right: 8px; color: black;">
                                        <div>
                                            <van-icon name="gold-coin-o" color="red"/>
                                            <span style="color: red;">460.00</span>
                                        </div>
                                        <van-icon name="add" color="red" size="30" @click="add(ind)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </SwiperSlide>
        </Swiper>
    </div>


   
</template>

<script setup>
import {  ref } from "vue"
//1.引入swiper组件包括css
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay,Navigation,Pagination,Scrollbar} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';


//返回上一级
const onClickLeft = () => history.back();
// 搜索功能
const value = ref('');
const onClickButton=()=>{
    console.log('点击了搜索按钮'+value.value);
}
</script>

<style scoped>

</style>
