<template>
<input v-model="num">
<button @click="ok()">确认</button>
<textarea v-model="text"></textarea>
</template>

<script setup>
import { ref } from 'vue';
const num = ref()
const text = ref()
let random = parseInt(Math.random() * 100)+1;
let ok = () =>{
    console.log(random);
    if(num.value>random){
        text.value="猜大了"
    }else if(num.value<random){
        text.value="猜小了"
    }else{
        text.value="猜对了"
    }
}
</script>