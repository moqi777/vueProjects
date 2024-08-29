<template>
    <input v-model="id">
    <button @click="queryByid">查询</button>
    <div>{{ user }}</div>

    <p>账号：<input v-model="user.account"></p>
    <p>密码：<input v-model="user.password"></p>
    <p>手机：<input v-model="user.phone"></p>
    <button @click="add">新增</button>
    <div>{{ msg }}</div>

    <table>
        <tr>
            <td>编号</td>
            <td>账号</td>
            <td>密码</td>
            <td>姓名</td>
            <td>手机</td>
        </tr>
        <tr v-for="u in users">
            <th>{{ u.id }}</th>
            <th>{{ u.account }}</th>
            <th>{{ u.password }}</th>
            <th>{{ u.name }}</th>
            <th>{{ u.phone }}</th>
        </tr>
    </table>
</template>

<script setup>
import {ref,getCurrentInstance, onMounted} from "vue"
import api from '../api/index'
const users = ref({})
// 类似于老版本的this获取当前的实例 {proxy} 是固定返回的 要求不能改名字 需要加大括号
const {proxy} = getCurrentInstance()
const user=ref({})
const msg = ref()
let add = ()=>{
    proxy.aaa.post("http://localhost:8082/add",user.value).then(res=>{
        console.log(res.data);
        msg.value = res.data.msg
    })
}

onMounted(()=>{
    //由于没有参数传递 {} 占位置
    api.postReq('/show',{}).then(res=>{
        console.log(res.data.data.list);
        users.value = res.data.data.list
    })
})
</script>
    
<!-- 老版本 -->
<!-- <script>
export default{
    data(){
        return{
            id:1,
            user:''
        }
    },
    methods:{
        queryByid(){
            this.aaa.post("http://localhost:8081/showById",{id:this.id}).then(res=>{
                console.log(res.data);
                this.user = res.data
            })
        }
    }
}
</script> -->

<style scoped>
</style>
