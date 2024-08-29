<template>
  <!--路由显示的入口-->
  <RouterView/>

  <RouterLink to="/">首页</RouterLink> |
  <RouterLink to="/article">栏目</RouterLink> |
  <RouterLink to="/news">咨询</RouterLink> |
  <RouterLink to="/user">我的</RouterLink> |
  
</template>

<script setup>
// import Query from './components/Query.vue'

// export default {
//   name: 'App',
//   components: {
//     Query
//   }
// }
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
