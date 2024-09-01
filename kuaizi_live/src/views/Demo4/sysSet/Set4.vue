<template>
    <van-nav-bar
  title="语言设置"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
  <div class="container">
    <!-- 使用 Vant 的 Cell 组件 -->
    <van-cell title="中文" @click="changeLanguage('zh')">
        <van-icon name="success"  v-if="language=='zh'"/>
    </van-cell>
    <van-cell title="English" @click="changeLanguage('en')">
        <van-icon name="success" v-if="language=='en'"/>
    </van-cell>
  </div>
</template>

<script setup>
import {ref} from "vue"
import { Cell, Toast } from 'vant';

const onClickLeft = () => history.back();
const language = ref('zh'); // 默认选择的语言

function changeLanguage(lang) {
  if (lang === 'zh') {
    language.value = 'zh'; // 切换到中文
  } else if (lang === 'en') {
    language.value = 'en'; // 切换到英文
  }
}
</script>

<style scoped>

</style>