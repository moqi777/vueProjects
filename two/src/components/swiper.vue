<template>
    <!-- 
        modules：类似于v-model 做双向绑定的 只不过它是绑定很多变量
        需要在下面定义好数组的变量
        navigation：使用上一页下一页
        pagination：开启页码指示器
        autoplay：自动播放
    -->
    <Swiper 
    :modules="modules"
    navigation
    :pagination="{clickable:true}"
    :autoplay="{delay:5000}"
    mousewheel
    >
        <SwiperSlide>
            <img src="../assets/logo.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../assets/logo.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="../assets/logo.png"/>
        </SwiperSlide>
    </Swiper>
</template>
<!-- 如果使用vue3.2 setup语法糖 可以省略挂载组件 -->
<script setup>
import {Swiper,SwiperSlide} from "swiper/vue";
import {Autoplay,Navigation,Pagination,Mousewheel} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
const modules=[Autoplay,Navigation,Pagination,Mousewheel]
</script>

<style scoped>
</style>
