<template>
    <h3>标题</h3>
    <div>区域</div>
    <p>输入：<input type="text" v-model.trim="msg"></p>
    <p>输出：{{ msg }}</p>
    <img src="../assets/logo.png" alt="">
</template>

<!-- setup属于vue3.2语法糖
    1.省略导出export 它会默认导出
    2.省略繁琐的data() return 返回值
    3.省略methods 存放js函数的位置 -->
<script setup>
//使用setup可以更加方便的定义变量
import {ref} from 'vue'
//要把变量定义成常量 vue规则变量不能改 但是内容可以改
const msg = ref('呵呵')
    //导出组件 为了让其他组件导入 否则App就不能引入它显示
    /*属于vue2语法
    export default{
        data(){
            return{
                //定义变量：里面的内容以后是动态的
                msg:'信息'
            }
        }
    }
    */
</script>

<style>

</style>