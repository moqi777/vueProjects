<template>
    <h3>父组件</h3>
    <h3>父组件接收的数据：{{ result }}</h3>
    <!-- 3.显示子组件 -->
    <!-- vue老版本 新版本都类似于 通过:属性名(任意) 属性值就是要传递的数据(可以传递任意数据) -->
    <!-- 就是 v-bind 绑定属性名 只不过属性是任意编写 -->
    <two @childSend="getChildSend" :myAge :name="myName" :user="myUser" :list="myList"/>
</template>

<!-- vue老版本 -->
<!-- <script>
import two from './Child.vue'
export default{
    components:{
        two
    },
    data(){
        return{
            myAge:20,
            myName:'张三',
            myUser:{id:1,sex:'男',class:'sc240601'},
            myList:['java','mysql','js','vue'],
            result:""
        }
    },
    methods:{
        // 方法参数：就是子组件传递来的数据
        getChildSend:function(result){
            this.result=result
        }
    }
}
</script> -->

<script setup>
import { defineComponent, ref } from "vue"
//1.引入组件
import two from './Child.vue'
//2.挂载组件 vue3.2需要使用defineComponent()
defineComponent({
    components:{
        two
    }
})
const myAge = ref(18)
const myName = ref("李四")
const myUser = ref({id:1,sex:'男',class:'sc240601'})
const myList = ref(['java','mysql','js','vue'])

const result = ref();
const getChildSend = (res)=>{
    result.value=res
}
</script>

<style scoped>
</style>
