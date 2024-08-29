<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="1"><h1 style="font-size: 30px;">区域管理功能</h1></el-menu-item>
                <el-menu-item index="2">退出</el-menu-item>
                
            </el-menu>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
                <el-col :span="100">
                <el-menu
                    default-active="/area"
                    class="el-menu-vertical-demo"
                    router="true"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-menu-item index="/area">
                    <template #title>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style="font-size: 18px;">区域管理</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </template>
                    </el-menu-item>
                    <el-menu-item index="2">
                    <template #title>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style="font-size: 18px;">城市管理</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </template>
                    </el-menu-item>
                </el-menu>
                </el-col>
            </el-row>
          </el-aside  >
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
  