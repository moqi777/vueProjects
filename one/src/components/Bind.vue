<template>
    <!-- v-bind 用于绑定属性值
        将下面vue创建的变量 给标签属性值使用 -->
     <a v-bind:href="url">链接1</a>
     <!-- v-bind可以省略 -->
     <a :href="url">链接2</a>
     <!-- 借助于双向绑定修改url的值 -->
      地址：<input v-model="url">
</template>

<script setup>
import {ref} from 'vue'
const url = ref('http://www.baidu.com')
</script>