<template>
    <!-- v-if 和 v-show区别
        if底层不满足就不会去渲染标签 所以标签是不存在的
        show底层通过display是否切换none来显示隐藏的
            标签都是存在的 但是有的隐藏了看不到 -->
    <div v-show="status==1">show启用</div>
    <div v-show="status==0">show禁用</div>
    <div v-show="status==2">show未验证</div>

    <div v-if="status==1">启用</div>
    <div v-else-if="status==0">禁用</div>
    <div v-else-if="status==2">未验证</div>
    <div v-else>冻结</div>
    <input v-model="status">
</template>

<script setup>
import {ref} from 'vue'
const status = ref(1)
</script>