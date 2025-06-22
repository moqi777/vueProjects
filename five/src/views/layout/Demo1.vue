<template>
首页
<van-button type="primary" @click="add">添加订单</van-button>
<van-button type="primary" @click="query">查看商品</van-button>
<van-button type="primary" @click="reduce">减少库存</van-button>
<div>{{ result }}</div>
</template>

<script setup>
import {ref} from "vue"
import api from '../../api/index'
const result=ref()
let add =()=>{
    api.postReq('/order/add?id=10').then(res=>{
        result.value=res.data
    })
}
let query =()=>{
    api.getReq('/goods/getGoods/10000').then(res=>{
        result.value=res.data
    })
}
let reduce =()=>{
    api.postReq('/stock/reduce').then(res=>{
        result.value=res.data
    })
}
</script>

<style scoped>
</style>
