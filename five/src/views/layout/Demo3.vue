<template>
<!-- 搜索框 -->
<van-search v-model="value" placeholder="搜索文章关键词" style="margin-top: 5px;"/>
<!-- Tab标签页 -->
<van-tabs v-model:active="active" line-width="60" swipeable>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;推荐&nbsp;&nbsp;&nbsp;&nbsp;">
    <!-- List列表，下拉刷新 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <!-- 使用 div 渲染每个列表项 -->
          <div v-for="(item, index) in list" :key="index" class="list-item"
            style="height: 100px;border-bottom: 1px solid #F7F7F7;padding:10px;position: relative;">
            <van-row>
                <van-col span="17">
                    <span style="font-size: 20px;font-weight: 500;">{{ item.title }}</span>
                    <div style="width: 200px;height: 20px;position: absolute;bottom: 10px;display: flex;align-items: center;">
                        <van-image
                            round
                            width="1rem"
                            height="1rem"
                            :src="item.head"
                            style="padding-right: 10px;"
                            />
                        <span style="font-size: 12px;color: gray;">{{ item.name }}</span>&nbsp;&nbsp;
                        <span style="font-size: 12px;color: gray;">{{ item.time }}</span>
                    </div>
                </van-col>
                <van-col span="7">
                    <div style="width: 120px;height: 100px;" 
                        :style="{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }">
                    </div>
                </van-col>
            </van-row>
          </div>
        </van-list>
        </van-pull-refresh>
    </van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;市场报告&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;AI楼盘分析&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;要闻&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;百科&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;楼市动态&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
  <van-tab title="&nbsp;&nbsp;&nbsp;&nbsp;诸葛号&nbsp;&nbsp;&nbsp;&nbsp;">推荐</van-tab>
</van-tabs>
</template>

<script setup>
import {ref} from "vue"

const value = ref('');
const active = ref(0);
const list = ref([]);
const loading = ref(false);//是否处于加载状态
const finished = ref(false);
const refreshing = ref(false);//是否加载失败
//滚动条与底部距离小于 offset 时触发
const onLoad = () => {
    setTimeout(() => {
        //加载时清空
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }
        //一口气先上多少条数据
        for (let i = 0; i < 10; i++) {
            //将对象推入列表
            list.value.push({
                title: "朝阳-中建星光|权威配置 启幕内城头排生活",
                name: "诸葛找房北京站",
                head:"https://s2.loli.net/2024/08/29/JqS1UaZmGNjr95P.jpg",
                img:"https://s2.loli.net/2024/08/29/nIxvlu247cQRhLj.jpg",
                time:"10小时前"
            })
        }
        loading.value = false;

        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 0);
};

const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};
</script>

<style scoped>
</style>
