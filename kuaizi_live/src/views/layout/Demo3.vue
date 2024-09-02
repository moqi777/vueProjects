<template>

    <div style="display: flex;justify-content: space-between;margin-top: 10px;  /* 设置背景颜色为白色 */  ">
    <div style="margin-right: 10px;background-color: white;display: block;">
        
        <router-link to="/定位页面">
        <van-sticky :offset-top="10">
            <van-icon name="location" size="30" color="black"/>
            <span style="color: black;">马尼亚{{读取定位的位置}}&nbsp;&nbsp;&nbsp;></span>
        </van-sticky>
           
        </router-link>
    </div>
    <div style="display: flex;justify-content: space-between;">
        <div>
            <div v-if="totalCounters!=0">
                <router-link to="/购物车页面">
                    <van-icon  name="cart-o" color="black"  @click="shop"  :badge="totalCounters" size="30" />
                </router-link>
            </div>
            <div v-if="totalCounters==0">
                <router-link to="/购物车页面">
                    <van-icon  name="cart-o" color="black"  @click="shop" size="30"/>
                </router-link>
            </div>
        </div>
        <div style="margin-left: 10px;">
            <router-link to="/消息中心页面">
                <van-icon name="chat-o" size="30" color="black" />
            </router-link>
        </div>
    </div>
</div>



<!-- 搜索框 -->
 <!-- style="position: fixed;left: 30px; top: 0; width: 90%; z-index: 1000; background-color: white;" -->
<router-link to="/search" >
    <van-sticky :offset-top="0" style="margin-left: 24px;">
     <div class="search-sum" >
        <div class="search-container">
            <div><van-icon name="search" color="black" /></div>
            <input type="text" v-model="searchText" placeholder="请输入搜索关键词" @keyup.enter="search" />
            <button @click="search" style="background-color: orange; border-radius: 5px;color: black;">搜索</button>
         </div>
     </div>
     </van-sticky>
</router-link>






<!-- 刷新的前端 -->
<van-pull-refresh v-model="loading" @refresh="onRefresh">
 



<!-- 回到顶部的 -->
<van-cell v-for="item in list" :key="item" :title="item" z-index="3"/>
<van-back-top right="5vw" bottom="30vh" style="background-color: white;  border-radius: 50%; color: black;"/>
<!-- 右边的购物车 -->
<van-cell v-for="item in list" :key="item" :title="item" z-index="3"  @click="shop"/>
<van-back-top  right="5vw" bottom="20vh" style="background-color: white;  border-radius: 50%;" >
    <div v-if="totalCounters!=0">
        <router-link to="/购物车页面">
            <van-icon  name="cart-o" color="black"  @click="shop"  :badge="totalCounters" />
        </router-link>
    </div>
    <div v-if="totalCounters==0">
        <router-link to="/购物车页面">
            <van-icon  name="cart-o" color="black"  @click="shop" />
        </router-link>
    </div>
</van-back-top>

<!-- 分类的 -->
<van-row :gutter="[10, 20]" style="padding-left: 1%;margin-top: 10px;"  >
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">蔬菜生鲜</span>
    </router-link>     
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">热卖水果</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">爆款零食</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">冰霜饮品</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">个护用品</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">日用百货</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">电子家电</span>
    </router-link>
  </van-col>
  <van-col span="4.8">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="4rem"
            height="4rem"
            :src="require('../../assets/Classical.jpg')"
        />
        <br>
        <span style="color: black;">全部分类</span>
    </router-link>
  </van-col>
</van-row>

<!-- 优选商品等 -->
<div style="width: 100%; height: 100%;display: flex;justify-content: center;margin-top: 15px;">
    <router-link to="/页面">
        <van-image
            radius="20px"
            width="22rem"
            height="8rem"
            :src="require('../../assets/Classical.jpg')"
        />
    </router-link>
</div>

<van-tabs  v-model:active="active" swipeable sticky :offset-top="48">
  <van-tab v-for="index in title" :title="index" >
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%;" >  
        <div v-for="ind in 8" :key="ind" style="width: calc(50% - 3px); margin-bottom: 10px;"> 
            <router-link to="/commodity">  
                <div style="width: 100%; height: 100%; background-color: aliceblue; border-radius: 4%; display: flex; justify-content: center; align-items: center; flex-direction: column;">  
                    <van-image radius="20px" width="11rem" height="5rem" :src="require('../../assets/Classical.jpg')" />  
                <div style="width: 180px; margin-top: 5px;">  
                    <span style="width: 30px; height: 20px; display: inline-block; line-height: 20px; text-align: center; background-color: orange; color: white; font-size: 10px; border-radius: 3px; margin-right: 5px;">自营</span>  
                    <span style="color: black; font-size: 16px;">蔬果园幸福四叶草香氛洗衣凝珠10g*52颗</span> 
                    <div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;color: darkgray;font-size: 12px;margin-top: 5px;">  
                        <span>四效合一 谷爱凌同款 除菌除螨玫瑰精油香氛洗衣液</span>  
                    </div>  
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;margin-right: 8px; color: black;">  
                        <div>  
                            <van-icon name="gold-coin-o" />  
                            <span>460.00</span>  
                        </div>  
                        <div v-if="itemCounters[ind]==0">
                            <van-icon name="add" color="orange" size="30" @click="add(ind)"   />  
                        </div>
                        <div v-if="itemCounters[ind]!=0">
                            <van-icon name="add" color="orange" size="30" @click="add(ind)" :badge="itemCounters[ind]"  />  
                        </div>
                       
                    </div>
                </div>  

                </div>  
            </router-link>  
        </div>
    </div>

  </van-tab>
</van-tabs>

</van-pull-refresh>



</template>

<script setup>
import {ref,computed} from "vue"
const title=ref(['优选商品','爆款零食','冰爽饮品','日常口粮','方便速食'])

// 下拉刷新
const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        showToast('刷新成功');
        loading.value = false;
        count.value++;
      }, 1000);
    };


// 创建一个响应式数组来存储每个图标的计数器  
const itemCounters = ref(new Array(8).fill(0)); // 假设有8个图标  
//给购物车添加东西的函数
const add=(index)=>{
    //event.stopPropagation(); // 阻止事件冒泡  
    event.preventDefault(); // 阻止默认行为  
    itemCounters.value[index]++;  
    //存储我加入购物车多少件
    localStorage.setItem("sum",totalCounters.value);
    console.log("aaa")
}
// 计算 itemCounters 数组中所有元素的和  
const totalCounters = computed(() => itemCounters.value.reduce((sum, count) => sum + count, 0));

//去购物车页面的函数
const shop=()=>{
    event.stopPropagation(); // 阻止事件冒泡  
    console.log("bbb")
}
</script>

<style scoped>
.search-sum{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
.search-container {
  width: 95%;
  display: flex;
  align-items: center;
  background-color: white; /* 设置背景颜色为白色 */  
  border: 2px solid orange;
  border-radius: 15px;
  padding: 3px;
}

input[type='text'] {
  flex-grow: 1;
  border: none;
  outline: none;
}


</style>
