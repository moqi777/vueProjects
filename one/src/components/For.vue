<template>
    <table>
        <tr>
            <th>序号</th>
            <th>编号</th>
            <th>地址</th>
        </tr>
        <tr v-for="va in address">
            <td></td>
            <td>{{ va.id }}</td>
            <td>{{ va.addrname }}</td>
        </tr>
        <hr>
        <tr v-for="(va,i) in address">
            <td>{{ i }}</td>
            <td>{{ va.id }}</td>
            <td>{{ va.addrname }}</td>
        </tr>
    </table>
</template>

<script setup>
import {ref} from 'vue'
const address = ref([
    {id:8,addrname:'南昌'},
    {id:7,addrname:'北京'},
    {id:10,addrname:'上海'},
    {id:12,addrname:'济南'}
])
</script>