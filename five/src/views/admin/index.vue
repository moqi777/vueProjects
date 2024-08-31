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
      router="true"
    >
      <el-menu-item index="0">
        <img
          style="width: 80px"
          src="../../assets/logo.png"
          alt="Element logo"
        />
      </el-menu-item>
      <el-menu-item index="/">XXXAPP后台管理系统</el-menu-item>
      <el-sub-menu index="2">
        <template #title>{{ admin.account }}</template>
        <el-menu-item index="/个人信息 逐渐">个人信息</el-menu-item>
        <el-menu-item index="修改密码 组件">修改密码</el-menu-item>
        <el-menu-item index="/demo4">返回前台</el-menu-item>
        <el-menu-item index="2-4">退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  router="true"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="/admin">
                    <template #title>
                      <!-- icon模版 elementplus默认没有安装的需要手动配置 -->
                      <el-icon><House /></el-icon>
                      <span>首页</span>
                    </template>
                  </el-menu-item>
  
                  <el-menu-item index="2">
                    <template #title>
                      <el-icon><Fold /></el-icon>
                      <span>栏目管理</span>
                    </template>
                  </el-menu-item>
  
                  <el-menu-item index="3">
                    <template #title>
                      <el-icon><Document /></el-icon>
                      <span>文章管理</span>
                    </template>
                  </el-menu-item>
  
                  <el-menu-item index="4">
                    <template #title>
                      <el-icon><Avatar /></el-icon>
                      <span>客户反馈</span>
                    </template>
                  </el-menu-item>
  
                  <el-sub-menu index="5">
                    <template #title>
                      <el-icon><Setting /></el-icon>
                      <span>系统管理</span>
                    </template>
                    <el-menu-item index="/admin/myuser">
                      
                      <template #title>用户管理</template>
                    </el-menu-item>
                    <el-menu-item index="5-2">
                      <template #title>角色管理</template>
                    </el-menu-item>
                    <el-menu-item index="5-3">
                      <template #title>操作日志</template>
                    </el-menu-item>
                    <el-menu-item index="5-4">
                      <template #title>权限管理</template>
                    </el-menu-item>
                  </el-sub-menu>
  
                  <!-- <el-sub-menu index="6">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>一级菜单</span>
                    </template>
                    <el-sub-menu index="1-4">
                      <template #title>二级菜单</template>
                      <el-menu-item index="1-4-1">三级菜单</el-menu-item>
                    </el-sub-menu>
                  </el-sub-menu> -->
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
            <RouterView/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  const admin=ref({account:String})
  
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

  onMounted(()=>{
    admin.value = JSON.parse(localStorage.getItem('admin') || '{}');
  })
  </script>
  
  <style>
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  </style>