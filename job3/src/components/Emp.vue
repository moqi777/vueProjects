<template>
<table cellspacing="0px" cellpadding="10px" border="1px">
    <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>工作</th>
        <th>入职日期</th>
        <th>工资</th>
        <th>
            <button @click="addShow">新增</button>
        </th>
    </tr>
    <tr v-for="e in emp">
        <td>{{ e.empno }}</td>
        <td>{{ e.ename }}</td>
        <td>{{ e.job }}</td>
        <td>{{ e.hiredate }}</td>
        <td>{{ e.sal }}</td>
        <td>
            <button @click="del(e.empno)">删除</button>&nbsp;
            <button @click="updateShow(e)">修改</button>
        </td>
    </tr>
</table>
<div id="update">
    <h3>修改</h3>
    姓名：<input v-model="updateEmp.ename"><br><br>
    工作：<input v-model="updateEmp.job"><br><br>
    工资：<input v-model="updateEmp.sal"><br><br><br>
    <button @click="update">确认</button>&nbsp;
    <button onclick="document.getElementById('update').style.display='none'">取消</button>
</div>
<div id="add">
    <h3>新增</h3>
    姓名：<input v-model="addEmp.ename"><br><br>
    工作：<input v-model="addEmp.job"><br><br>
    工资：<input v-model="addEmp.sal"><br><br><br>
    <button @click="add">确认</button>&nbsp;
    <button onclick="document.getElementById('add').style.display='none'">取消</button>
</div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from '../api/index'
const emp = ref([])
const updateEmp = ref({})
const addEmp = ref({})

onMounted(()=>{
    axios.postReq("/emp/show",{}).then(res=>{
        emp.value = res.data.data
    })
})

let del = (id)=>{
    axios.postReq("/emp/del",{empno:id}).then(res=>{
        if(res.data.code!=1){
            alert("删除失败")
        }else{
            // 把页面中的改条数据也删了
            for(let i=0;i<emp.value.length;i++){
                if(emp.value[i].empno==id){
                    emp.value.splice(i,1)
                    break;
                }
            }
            alert("删除成功")
        }
    })
    
}

let updateShow = (e)=>{
    document.getElementById("update").style.display='block'
    updateEmp.value = e
}
let addShow = ()=>{
    document.getElementById("add").style.display='block'
}

let update = ()=>{
    axios.postReq("/emp/update",updateEmp.value).then(res=>{
        document.getElementById("update").style.display='none'
        if(res.data.code==1){
            alert("修改成功");
            location.reload()
        }else{
            alert("修改失败")
        }
    })
}
let add = ()=>{
    axios.postReq("/emp/add",addEmp.value).then(res=>{
        document.getElementById("add").style.display='none'
        if(res.data.code==1){
            alert("新增成功");
            location.reload()
        }else{
            alert("新增失败")
        }
    })
}
</script>

<style scoped>
#update{
    padding: 20px;
    width: 400px;
    height: 230px;
    border: 1px solid black;
    background-color: white;
    position: absolute;
    top: 100px;
    left: 350px;
    display: none;
}
#add{
    padding: 20px;
    width: 400px;
    height: 230px;
    border: 1px solid black;
    background-color: white;
    position: absolute;
    top: 100px;
    left: 350px;
    display: none;
}
</style>
