<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">区域管理</el-breadcrumb-item>
    <el-breadcrumb-item>列表</el-breadcrumb-item>
  </el-breadcrumb>
  <hr><br>
  <!-- 搜索 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="区域名称">
      <el-input v-model="formInline.user" placeholder="" clearable />
    </el-form-item>
    <el-form-item label="区域城市">
      <el-input v-model="formInline.user" placeholder="" clearable />
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="formInline.user" placeholder="" clearable />
    </el-form-item>
    <el-form-item label="创建时间">
      <div class="block">
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          start-placeholder="Start date"
          end-placeholder="End date"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="YYYY/MM/DD ddd"
          time-format="A hh:mm:ss"
        />
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
  <!-- 按钮 -->
  <el-button type="primary" auto-insert-space>&nbsp;&nbsp;添加&nbsp;&nbsp;</el-button>&nbsp;&nbsp;
  <el-button type="primary" auto-insert-space>&nbsp;&nbsp;查看&nbsp;&nbsp;</el-button>&nbsp;&nbsp;
  <el-button type="primary" auto-insert-space>&nbsp;&nbsp;编辑&nbsp;&nbsp;</el-button>&nbsp;&nbsp;
  <el-button type="primary" auto-insert-space>&nbsp;&nbsp;删除&nbsp;&nbsp;</el-button>
  <!-- 表格 -->
   <br><br>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="序号" width="100" />
    <el-table-column prop="name" label="区域名称" width="150" />
    <el-table-column prop="city" label="区域城市" width="180" />
    <el-table-column prop="address" label="地址" width="400" />
    <el-table-column prop="time" label="创建时间" />
  </el-table>
  <br>
  <el-pagination background layout="prev, pager, next" :total="30" small style="position: absolute;right: 50px;"/>
</template>

<script setup>
import {ref} from "vue"
import { ArrowRight } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const value1 = ref('')
const value2 = ref('')

const tableData = [
  {
    id: '1',
    name: '华南区域',
    city:'深圳、广州',
    address: '1.深圳-深圳市福田区北环大道通业大厦南塔五层501\n2.深圳-深圳市福田区北环大道通业大原南塔六层602\n3.深圳-深圳市福田区北环大道通业大厦南塔七层703\n4.广州-广州市越秀区东湖路123号',
    time:'2023-02-08 10:20:36'
  },
  {
    id: '2',
    name: '华东区域',
    city:'上海、杭州',
    address: '1.上海上海市浦东新区锦绣路1001号\n2.杭州--杭州市上城区万松岭路81号',
    time:'2023-02-08 09:35:13'
  }
]

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
}
.line {
  width: 1px;
  background-color: var(--el-border-color);
}
</style>
