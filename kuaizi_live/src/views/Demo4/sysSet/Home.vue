<template>
<van-nav-bar
  title="系统设置"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script setup>
import {ref} from "vue"
const onClickLeft = () => history.back();
</script>

<style scoped>
</style>
