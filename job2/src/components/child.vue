<template>
子组件：<input v-model="text" @input="click"/>
<Swiper
:modules="modules"
navigation
:pagination="{clickable:true}"
:autoplay="{delay:5000}"
mousewheel
>
    <SwiperSlide><img src="../assets/logo.png"></SwiperSlide>
    <SwiperSlide><img src="../assets/logo.png"></SwiperSlide>
    <SwiperSlide><img src="../assets/logo.png"></SwiperSlide>
    <SwiperSlide><img src="../assets/logo.png"></SwiperSlide>
    <SwiperSlide><img src="../assets/logo.png"></SwiperSlide>
</Swiper>
</template>

<script setup>
import {ref,defineEmits} from "vue"
import {Swiper,SwiperSlide} from 'swiper/vue'
import {Autoplay,Navigation,Pagination,Mousewheel} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
const text = ref()
const modules = [Autoplay,Navigation,Pagination,Mousewheel]

const emit = defineEmits(['send'])
let click = ()=>{
    emit('send',text.value)
}
</script>

<style scoped>
</style>
