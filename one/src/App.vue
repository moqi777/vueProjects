<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!-- <my/> -->
   <!-- <bind/> -->
   <!-- <If/> -->
   <On/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import my from './components/My.vue'
import bind from './components/Bind.vue'
import If from './components/If.vue'
import On from './components/On.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    my,
    bind,
    If,
    On
  }
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
