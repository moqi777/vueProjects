<template>
  <!-- 3.显示组件 -->
  <one/>
  <Life/>
  <Swiper/>
</template>

<script>
//1.引入组件
import one from './components/Parent.vue';
import Life from './components/Life.vue';
import Swiper from './components/swiper.vue';
export default{
  //2.挂载组件
  components:{
    one,
    Life,
    Swiper
  }
}
</script>

<style>

</style>
