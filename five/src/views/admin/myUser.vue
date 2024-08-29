<template>
    <!-- 搜索 -->
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="姓名">
        <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable />
        </el-form-item>
        <el-form-item label="性别">
        <el-select
            v-model="searchForm.sex"
            placeholder="请选择"
            clearable
        >
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
        </el-select>
        </el-form-item>
        <el-form-item label="时间">
        <el-date-picker
            v-model="searchForm.regtime1"
            type="date"
            placeholder="开始时间"
            clearable
            style="width: 150px;"
        />
        &nbsp;-&nbsp;
        <el-date-picker
            v-model="searchForm.regtime2"
            type="date"
            placeholder="结束时间"
            clearable
            style="width: 150px;"
        />
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="search">搜素</el-button>
        </el-form-item>
    </el-form>
    <!-- 新增按钮 -->
    <el-button type="primary" @click="dialogAdd=true">新增</el-button>
    <!-- 删除按钮 -->
    <el-button type="danger" @click="deleteAll">删除所选</el-button>

    <!-- 表格 -->
     <br>
     <br>
    <el-table 
        :data="tableData" 
        border 
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
        <el-table-column align="center" type="selection" width="100" />
        <el-table-column align="center" prop="id" label="ID" width="150" sortable />
        <el-table-column align="center" prop="name" label="姓名" width="200" />
        <el-table-column align="center" prop="integral" label="积分" width="200" />
        <el-table-column align="center" prop="sex" label="性别" width="200" />
        <el-table-column align="center" prop="regtime" label="创建时间" width="200" />
        <el-table-column align="center" label="操作">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                修改
                </el-button>
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >
                删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
     <br>
     <!-- 
        total：控制是否前端显示总条数
        sizes：控制是否显示每页条数下拉框
        prev：控制显示上一页
        pager：页码数
        next：下一页
        jumper：跳转到指定页码数
     -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10,20,50]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="position: absolute;right: 100px;"
    />

    <!-- 新增窗口弹出层：默认隐藏 单击新增才会显示 -->
    <el-dialog
        v-model="dialogAdd"
        title="新增用户"
        width="500"
        draggable
        overflow
    >
        <span>
            <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="addForm"
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
                :size="size"
                status-icon
            >
                <el-form-item label="姓名" prop="name">
                <el-input v-model="addForm.name" placeholder="请输入姓名"/>
                </el-form-item>
                <el-form-item label="积分" prop="integral">
                <el-input v-model="addForm.integral" placeholder="请输入积分"/>
                </el-form-item>
                <el-form-item label="时间" required>
                    <el-col :span="11">
                        <el-form-item prop="regtime">
                        <el-date-picker
                            v-model="addForm.regtime"
                            type="date"
                            aria-label="Pick a date"
                            placeholder="请输入注册的时间"
                            style="width: 100%"
                        />
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="addForm.sex">
                    <el-radio-button label="男" value="男" />
                    <el-radio-button label="女" value="女" />
                </el-radio-group>
                </el-form-item>
            </el-form>
        </span>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogAdd=false">取消</el-button>
            <el-button type="primary" @click="add">
            新增
            </el-button>
        </div>
        </template>
    </el-dialog>
    <!-- 修改窗口弹出层：默认隐藏 单击修改才会显示 -->
    <el-dialog
        v-model="dialogEdit"
        title="修改用户"
        width="500"
        draggable
        overflow
    >
        <span>
            <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="editForm"
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
                :size="size"
                status-icon
            >
                <el-form-item label="姓名" prop="name">
                <el-input v-model="editForm.name" placeholder="请输入姓名"/>
                </el-form-item>
                <el-form-item label="积分" prop="integral">
                <el-input v-model="editForm.integral" placeholder="请输入积分"/>
                </el-form-item>
                <el-form-item label="时间" required>
                    <el-col :span="11">
                        <el-form-item prop="regtime">
                        <el-date-picker
                            v-model="editForm.regtime"
                            type="date"
                            aria-label="Pick a date"
                            placeholder="请输入注册的时间"
                            style="width: 100%"
                        />
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="editForm.sex">
                    <el-radio-button label="男" value="男" />
                    <el-radio-button label="女" value="女" />
                </el-radio-group>
                </el-form-item>
            </el-form>
        </span>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogEdit=false">取消</el-button>
            <el-button type="primary" @click="edit">
            修改
            </el-button>
        </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref,reactive, onMounted, watch  } from 'vue';
import type { ComponentSize,FormRules, } from 'element-plus'
import {ElMessage,ElMessageBox} from 'element-plus'
import api from '../../api/index'
import 'element-plus/dist/index.css'

interface User {
    id:Number,
    name:String,
    regtime:Date,
    integral:Number,
    sex:String
}

const tableData = ref([])//表格数据
const multipleSelection = ref<User[]>([])
const currentPage = ref(1)//当前页码
const pageSize = ref(5)//页面容量
const total = ref()//总页数
const size = ref<ComponentSize>('default')
const background = ref(true)
const disabled = ref(false)//分页功能状态
const dialogAdd = ref(false)//新增弹出层 显示状态
const dialogEdit = ref(false)//修改弹出层 显示状态
const ruleFormRef = ref()//新增和删除表单对象
//新增表单属性对象
const addForm =ref({
    id:'',
    name:'',
    regtime:'',
    integral:'',
    sex:''
})
//修改表单属性对象(默认值回显用户原来的信息)
const editForm =ref({
    id:'',
    name:'',
    regtime:'',
    integral:'',
    sex:''
})
//表单验证
const rules = reactive<FormRules<User>>({
  name: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: '长度需在3-5之间', trigger: 'blur' }
  ],
  sex: [
    { required: true, message: '性别不能为空', trigger: 'blur' }
  ],
  regtime: [
    { required: true, message: '时间不能为空', trigger: 'blur' }
  ],
  integral: [
    { required: true, message: '积分不能为空', trigger: 'blur' }
  ]
})
//搜索用户数据
const searchForm = ref({
    name:null,
    regtime1:null,
    regtime2:null,
    sex:null
})
//挂载函数：第一次访问才会访问
onMounted(()=>{
    //初始化数据 给tableData赋值
    initData()
})
//页面数据做初始化
const initData=()=>{
    api.postReq('/myUser/selectAll?pageNum='+currentPage.value+'&pageSize='+pageSize.value,searchForm.value).then(res=>{
        let result = res.data;
        tableData.value = result.data.list
        //分页当前页数 每页...
        currentPage.value = result.data.pageNum
        pageSize.value = result.data.pageSize
        total.value = result.data.total
    })
}
//搜索提交
const search = () => {
  initData()
}
//复选框改变触发
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
  //通过map方法可以取出对象数组中的每个id封装成数组返回
  //val.map(x=>x.id)
}
//批量删除触发
const deleteAll=()=>{
    console.log(multipleSelection.value);
      //删除确认
        ElMessageBox.confirm(
            '确认删除?',
            '提示',
            {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'success',
            }
        ).then(() => {
            //确认删除发送请求
            api.postReq('/myUser/dels',multipleSelection.value).then(res=>{
                if(res.data.code==1){
                    ElMessage({
                        message: res.data.msg,
                        type: 'success'
                    })
                    initData()
                }else{
                    ElMessage.error(res.data.msg)
                }
            })
        }).catch(() => {})
}
// 修改触发
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
  //显示原来用户的信息，使用JSON实现深拷贝 实现修改弹出框时页面数据不会一起动
  editForm.value=JSON.parse(JSON.stringify(row))
  dialogEdit.value=true
}
// 删除触发
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
  //删除确认
  ElMessageBox.confirm(
    '确认删除?',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'success',
    }
  ).then(() => {
      //确认删除发送请求
      api.postReq('/myUser/del?id='+row.id).then(res=>{
        if(res.data.code==1){
            ElMessage({
                message: res.data.msg,
                type: 'success'
            })
            initData()
        }else{
            ElMessage.error(res.data.msg)
        }
      })
    })
    .catch(() => {})
}
// 修改每页条数触发
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageSize.value=val;//给每页条数赋值
  initData()//重新初始数据
}
//修改页数触发
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage.value = val;
  initData()
}
//新增函数
const add=()=>{
    //校验成功才发送请求
    ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
            api.postReq('/myUser/add',addForm.value).then(res=>{
                if(res.data.code==1){
                    ElMessage({
                        message: res.data.msg,
                        type: 'success'
                    })
                    initData()
                }else{
                    ElMessage.error(res.data.msg)
                }
            })
            dialogAdd.value = false
        } 
    })
}
//编辑函数
const edit=()=>{
    //校验成功才发送请求
    ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
            api.postReq('/myUser/update',editForm.value).then(res=>{
                if(res.data.code==1){
                    ElMessage({
                        message: res.data.msg,
                        type: 'success'
                    })
                    initData()
                }else{
                    ElMessage.error(res.data.msg)
                }
            })
            dialogEdit.value = false
        } 
    })
}
//新增和修改弹出框弹出或消失触发
watch([dialogAdd,dialogEdit],(newValues,oldValues)=>{
    const [newDialogAdd, newDialogEdit] = newValues;
    const [oldDialogAdd, oldDialogEdit] = oldValues;
    //关闭窗口的时候(两个表单共用同一个表单对象，所以无论是哪个关闭都将表单对象重置)
    if(newDialogAdd==false&&newDialogEdit==false){
        //将表单重置
        ruleFormRef.value.resetFields()
    }
})
</script>
<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}
.demo-form-inline .el-select {
  --el-select-width: 100px;
}
</style>

