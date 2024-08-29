<template>
<table>
    <tr>
        <td>姓名</td>
        <td>数学</td>
        <td>语文</td>
        <td>英语</td>
    </tr>
    <tr v-for="va in scores">
        <template v-if="va.math>=60&&va.chinese>=60&&va.english>=60">
            <th>{{ va.name }}</th>
            <th>{{ va.math }}</th>
            <th>{{ va.chinese }}</th>
            <th>{{ va.english }}</th>
        </template>
    </tr>
</table>
</template>

<script setup>
import { ref } from 'vue';

const scores = ref([
    { name: 'Bob', math: 97, chinese: 89, english: 67 },
    { name: 'Tom', math: 67, chinese: 52, english: 98 },
    { name: 'Jerry', math: 72, chinese: 87, english: 89 },
    { name: 'Ben', math: 92, chinese: 87, english: 59 },
    { name: 'Chan', math: 47, chinese: 85, english: 92 },
] )
</script>