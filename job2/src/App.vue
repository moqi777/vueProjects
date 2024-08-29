<template>
  父组件：{{ msg }}
  <br>
  <child @send="show"/>
  <axios/>
</template>

<script setup>
import { ref } from 'vue';
import child from './components/child.vue'
import axios from './components/axios.vue';

const msg = ref()
let show = (text)=>{
  msg.value = text
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
