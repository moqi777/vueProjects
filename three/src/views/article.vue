<template>
    <h3>栏目一级路由</h3>
    <!-- to如果要访问多级路由 to="/一级/二级/..." -->
    <RouterLink to="/article/history">历史栏目</RouterLink>||
    <RouterLink to="/article/music">音乐栏目</RouterLink>||
    <RouterLink to="/article/sports">体育栏目</RouterLink>
    <div>
        <RouterView/>
    </div>
</template>

<script setup>
import {ref} from "vue"
</script>

<style scoped>
</style>
