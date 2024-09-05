<template>
售房
</template>

<script setup>
import {ref} from "vue"
//接收方是useRoute
import {useRoute} from 'vue-router'
const route=useRoute()
// 获取发送的字符串对象 条件
const options = JSON.parse(route.params.options)
console.log(options);
</script>

<style scoped>
</style>
