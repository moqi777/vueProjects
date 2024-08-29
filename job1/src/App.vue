<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <score/>
  <random/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import score from './components/score.vue';
import random from './components/random.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    score,
    random
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
