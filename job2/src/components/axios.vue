<template>
输入查询id：<input v-model="id">
<button @click="send">查询</button>
数据：{{ msg }}
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue"

const id = ref()
const msg = ref()

let send = ()=>{
    axios.post("http://localhost:8081/showById",{id:id.value}).then(res=>{
        if(res.data.code==0){
            msg.value = "用户不存在"
        }else{
            msg.value = res.data.data.name
        }
    })
}
</script>

<style scoped>
</style>
