<template>
<input v-model="msg">
</template>

<!-- 老版钩子函数 和 methods 是同级的-->
<!-- <script>
export default{
    data(){
        return{
            msg:"呵呵"
        }
    },
    //函数的位置
    methods:{

    },
    // 钩子函数：随着生命周期的变化自动触发
    //页面刚刚加载，会根据不同生命周期阶段执行下面4个函数
    beforeCreate:()=>{
        console.log("创建前");
    },
    created(){
        console.log("创建后，创建一些vue核心对象");
    },
    beforeMount:function(){
        console.log("挂载前");
    },
    //最常用的 经常需要在这里加载后端数据
    mounted(){
        console.log("挂载后，页面已经渲染完毕，可以在前端看到效果了");
    },
    //当任意数据发生改变 会执行下面的两个函数
    beforeUpdate(){
        console.log("更新前");
    },
    updated(){
        console.log("更新后");
    },
    //当组件销毁 看不到效果的 会自动执行下面两个函数
    beforeDestroy(){
        console.log("卸载前");
    },
    destroyed(){
        console.log("卸载后");
    }
}
</script> -->

<!-- 新版钩子函数
     跟旧版相比 新版的vue方式beforeCreate和created 已经被调用了
     所以这两个函数在使用时是可以忽略的
     需要导入对应的函数名(on钩子函数) 通过import
     而且每种钩子函数可以编写多个 -->
<script setup>
const msg = ref()
import {onMounted, onUpdated, ref} from "vue"
onMounted(()=>{
    console.log("挂载后");
})
onUpdated(()=>{
    console.log("更新后");
    
})
</script>

<style scoped>
</style>
