<template>
    <div>
        <input type="button" value="确认" v-on:click="show()"/>
        <!-- 但是以后编写 v-on: -> @ -->
        <input type="button" value="确认@" @click="show()"/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const show = ()=>{
    console.log("hello");
}
</script>