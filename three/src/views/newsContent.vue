<template>
    <h3>咨询详情页面</h3>
    <!-- .type 因为路由配置的是:type -->
    <p>{{ $route.params.type }}</p>
</template>

<script setup>
import {ref} from "vue"
import { useRoute } from "vue-router";
//setup语法糖需要添加 useRouter函数
const type = useRoute().params.type
console.log(type);

</script>

<style scoped>
</style>
