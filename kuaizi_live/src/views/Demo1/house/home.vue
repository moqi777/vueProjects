<template>
<van-sticky>
    <van-nav-bar
    title="房产"
    left-arrow
    @click-left="onClickLeft"
    style="color: gray;"
    />
</van-sticky>
<div class="big">
    <!-- 顶部静态DIV -->
    <div class="top_div">
        <br><span style="font-size: 20px;display: flex;align-items: center;">筷子生活房产&nbsp;
            <svg-icon iconName="icon-a-jianongcunfangzi" style="width: 25px;height: 25px;"></svg-icon></span>
        <br><span style="display: flex;align-items: center;">诗和远方很贵，但租我的房不贵 &nbsp;
            <svg-icon iconName="icon-dianzan" style="width: 20px;height: 20px;"></svg-icon>。</span>
            <van-row>
                <van-col span="8"><div class="top_div_div" style="background-color:#ECEEFD;color: #4950C3;" @click="st1"><span><br>Wechat-num<br>复制微信</span></div></van-col>
                <van-col span="8"><div class="top_div_div" style="background-color:#E6F4FB;color: #5CAEC7;" @click="st2"><span><br>TG-num<br>复制TG</span></div></van-col>
                <van-col span="8"><div class="top_div_div" style="background-color:#E6F4FB;color: #5CAEC7;" @click="st3"><span><br>+63-936-923-<br>9576<br>拨打电话</span></div></van-col>
            </van-row>
            <!-- 拨打电话弹窗 -->
            <van-action-sheet
            v-model:show="show"
            :actions="actions"
            cancel-text="取消"
            close-on-click-action
            @cancel="onCancel"
            />
    </div>
    <!-- 导航栏 -->
    <van-sticky :offset-top="45" style="width: 95%;">
     <div class="nav">
        <!-- 租房 求租 购房 售房 导航栏 -->
        <van-row>
            <van-col span="6" @click="selectImage(0)">
                <van-image
                width="5rem"
                height="4rem"
                fit="cover"
                :src="getImageUrl('/app_img/house1.png')"
                radius="10px"
                 :style="{ border: selectedIndex === 0 ? '2px solid orange' : '' }"
                />
            </van-col>
            <van-col span="6" @click="selectImage(1)">
                <van-image
                width="5rem"
                height="4rem"
                fit="cover"
                radius="10px"
                :src="getImageUrl('/app_img/house2.png')"
                 :style="{ border: selectedIndex === 1 ? '2px solid orange' : ''}"
                />
            </van-col>
            <van-col span="6" @click="selectImage(2)">
                <van-image
                width="5rem"
                height="4rem"
                fit="cover"
                radius="10px"
                :src="getImageUrl('/app_img/house3.png')"
                 :style="{ border: selectedIndex === 2 ? '2px solid orange' : '' }"
                />
            </van-col>
            <van-col span="6" @click="selectImage(3)">
                <van-image
                width="5rem"
                height="4rem"
                fit="cover"
                radius="10px"
                :src="getImageUrl('/app_img/house4.png')"
                 :style="{ border: selectedIndex === 3 ? '2px solid orange' : '' }"
                />
            </van-col>
        </van-row>
        <!-- 分类导航栏 -->
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" title="排序"/>
            <van-dropdown-item v-model="value2" :options="option2" title="全部区域"/>
            <van-dropdown-item v-model="value3" :options="option3" title="发布人"/>
            <van-dropdown-item v-model="value4" :options="option4" title="出租类型"/>
        </van-dropdown-menu>
    </div>
    </van-sticky>
    <!-- 内容区域 -->   
    <van-sticky :offset-top="180" style="width: 95%;">
        <router-view/>
    </van-sticky>
</div>
<!-- 底部 我的发布 发布 按钮 -->
<div class="botton_div">
    <div class="my_issue" @click=""><span>我的发布</span></div>
    <div class="issue" @click="router.push('/issue_home')"><span>发 布</span></div>
</div>
</template>

<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
const show = ref(false);//拨打电话弹窗是否显示
const actions = [{ name: '呼叫 +63 936 923 9576' }];
const selectedIndex = ref(0);  // 用于导航栏中图片点击边框变化 记录当前选中的图片索引 
const value1=ref(0)//价格排序条件
const value2=ref(0)//区域条件
const value3=ref(0)//发布人条件
const value4=ref(0)//出租类型条件

const onClickLeft = () => router.push('/Demo1');//返回上一级

//导航栏条件
const option1=[
    {text:'默认排序',value:0},
    {text:'价格降序',value:1},
    {text:'价格升序',value:2}
]
const option2 = [
    { text: '全部区域', value: 0 },
    { text: '马尼拉', value: 1 },
    { text: '宿务', value: 2 },
    { text: '达沃', value: 3 },
    { text: '八打雁', value: 4 },
    { text: '甲美地', value: 5 },
    { text: '达古潘', value: 6 },
    { text: '安吉利斯', value: 7 },
    { text: '三宝颜', value: 8 },
    { text: '伊洛伊洛', value: 9 },
    { text: '卡加延德奥罗', value: 10 },
    { text: '马拉波', value: 11 },
    { text: '巴科洛德', value: 12 },
    { text: '莱加斯皮', value: 13 }
];

const option3=[
    {text:'全部',value:0},
    {text:'个人',value:1},
    {text:'中介',value:2}
]
const option4=[{text:'全部',value:0}]

//导航栏图片点击事件
const selectImage = (index) => {
  selectedIndex.value = index;
  //切换内容，并传递规则对象
  router.push({
    name:'house'+(index+1),
    params:{options:JSON.stringify({value1:value1.value,value2:value2.value,value3:value3.value,value4:value4.value})}
  })
};


//用于解析图片本地地址
const getImageUrl=(imgPath)=> {
    return require('../../../assets'+imgPath); 
}

// 顶部静态DIV点击弹窗 复制成功
let st1=()=> {
    copy("kuaizirent");
    showToast('微信号已复制');
}
let st2=()=> {
    copy("@kuaizirent");
    showToast('TG号已复制');
}
let st3=()=> show.value=true;
//复制方法
const copy=data=>{
    const textarea = document.createElement('textarea');
    textarea.value = data;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

</script>

<style scoped>
.big{
    background-color: #F4F4F4;
    width: 100%;
    height: 2500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.top_div{
    width: 90%;
    height: 200px;
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}
.top_div ::v-deep .van-row{
    width: 100%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
.top_div_div{
    width: 80%;
    height: 80%;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    font-size: 13px;
}
/* 导航栏 */
.nav{
    width: 100%;
    height: 140px;
}
.nav ::v-deep .van-col{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
}
.nav ::v-deep .van-dropdown-item{
    margin-left: auto;
    margin-right: auto;
    width: 95%;
}
/* 底部 */
.botton_div{
    width: 100%;
    height: 80px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.botton_div div{
    border-radius: 5px;
    border: 1px solid #8E6DF7;
    display: flex;
    align-items: center;
    justify-content: center;
}
.my_issue{
    width: 25%;
    height: 60%;
    margin-right: 30px;
    background-color: #F3F4FF;
    color: #8E6DF7;
}
.issue{
    width: 50%;
    height: 60%;
    background-color: #8E6DF7;
    color: white;
}
</style>
