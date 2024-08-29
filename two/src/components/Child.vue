<template>
    <h3>子组件</h3>
    <h3>年龄：{{ myAge }}</h3>
    <h3>姓名：{{ name }}</h3>
    <h3>对象：{{ user.id }}  {{ user.sex }}  {{ user.class }}</h3>
    <h3>集合数字：
        <span v-for="s in list">{{ s+" " }}</span>
    </h3>

    <h4><button @click="send">发送数据</button></h4>
    <h4><input v-model="msg"></h4>
</template>

<!-- 老版本 -->
<!-- <script>
    export default{
        // 通过props来接收父组件传递的数据
        //age就是父组件传递过来的属性名(自定义的)
        props:{
            myAge:{
                type:Number,
                default:0
            },
            name:{
                type:String,
                default:""
            },
            user:{
                type:Object,
                default:null
            },
            list:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                msg:""
            }
        },
        methods:{
            send:function(){
                //this.$emit用于向父组件传递数据
                //参数1：自定义事件名
                //参数2：传递的数据(任意类型)
                this.$emit("childSend",this.msg)
            }
        }
    }
</script> -->

    <script setup>
    import { ref,defineEmits } from "vue"
    //vue3.2 通过defineProps来接收父组件的值
    defineProps({
        myAge:{type:Number,default:0},
        name:{type:String,default:""},
        user:{type:Object,default:null},
        list:{type:Array,default:[]}
    })
    //defineEmits() 返回一个触发器 用于触发自定义事件
    const emit = defineEmits(['childSend'])
    const msg = ref();
    const send = ()=>{
        emit('childSend',msg.value)
    }
    </script>

<style scoped>
</style>
