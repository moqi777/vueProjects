<template>
    <h3>学习</h3>

    <RouterView/>
    <RouterLink to="/study/studyData/java">java学习资料</RouterLink><br>
    <RouterLink to="/study/studyData/mysql">mysql学习资料</RouterLink><br>
    <RouterLink to="/study/studyData/vue">vue学习资料</RouterLink><br>
</template>

<script setup>
import {ref} from "vue"
</script>

<style scoped>
</style>
