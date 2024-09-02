<template>
<div>
<!-- 导航栏 -->
<van-sticky>
<van-nav-bar title="详情">
  <template #left>  
      <span style="color: blue;font-size: 20px;"  @click="onClickLeft"> < </span>  
    </template>
  <template #right>
    <van-icon name="share-o"size="18"  @click="showShare = true"/>
  </template>
</van-nav-bar>
</van-sticky>

<van-share-sheet
  v-model:show="showShare"
  title="选择要分享的平台"
  :options="options"
  @select="onSelect"
/>

   
     <div style="width: 100%;height: 100%;">
       <!-- 图片轮播 -->
        <Swiper  
            :modules="swiperModules"  
            class="swiper-container"  
            style="z-index: 0;"
        >  
            <SwiperSlide  
            v-for="(a, index) in 4"  
            :key="index"  
            class="slide-container"  
            >  
            <van-image
                width="24rem"
                height="15rem"
                fit="contain"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
            <van-tag round class="tag" color="#ffe1e1" text-color="black" size="large">{{ index+1  }}/4</van-tag>  
            </SwiperSlide>  
        </Swiper>  

        <div style="display: flex;justify-content: space-between;">
                    <div style="width: 96%;height: 100%; margin-left: 1%; background-color: pink; border-radius: 5%;margin-top: 10px;padding-left: 1%;padding-right: 1%;padding-top: 1%;padding-bottom: 1%;" >
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;margin-right: 8px; color: white;">  
                        <div>  
                            <van-icon name="gold-coin-o" />  
                            <span>460.00</span>  
                        </div>  
                       <div>
                          <span>库存{{ 读取数据库 }}&nbsp;/ &nbsp;销量{{ 读取数据库 }}</span> 
                       </div>
                    </div>
                        <div style="background-color: white; border-radius: 5%;padding-top: 3%;margin-top: 10px;" >

                            <div style="display: flex; justify-content: space-between;padding-left: 1%;padding-right: 1%;padding-bottom: 1%;" >
                              <div style="width: 100%; ">  
                                  <span style="width: 30px; height: 20px; display: inline-block; line-height: 20px; text-align: center; background-color: orange; color: white; font-size: 10px; border-radius: 3px; margin-right: 5px;">自营</span>  
                                  <span style="color: black; font-size: 16px;">蔬果园幸福四叶草香氛洗衣凝珠10g*52颗</span> 
                                  <div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;color: darkgray;font-size: 12px;margin-top: 5px;">  
                                      <span>四效合一 谷爱凌同款 除菌除螨玫瑰精油香氛洗衣液</span>  
                                  </div>  
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  

    </div>



    <!-- 底部显示 -->
    <van-action-bar v-if="$route.meta.showActionBar">
        <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-action-bar-icon  :icon="isCollected ? 'like' : 'like-o'"  
                              :text="isCollected ? '已收藏' : '收藏'"  
                              :color="isCollected ? 'red' : ''"    @click="collect"  />
        <RouterLink to="/购物车页面">
        <div v-if="totalCounters==0">
          <van-action-bar-icon icon="cart-o" text="购物车"  />
        </div>
        <div v-if="totalCounters!=0">
          <van-action-bar-icon icon="cart-o" text="购物车" :badge="totalCounters" />
        </div>
        </RouterLink>
        <van-action-sheet v-model:show="show">
            <div class="content">
                <div style="display: flex;justify-content: center;">
                  <van-image
                    width="100"
                    height="100"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                  />
                  <div>
                      <span>蔬果园幸福四叶草香氛洗衣凝珠10g*52颗</span>
                      <br>
                      <span style="font-size: 13px;color: darkgray;">库存:{{ 读取数据库数据 }}</span>
                      <br>
                      <span>已选:{{ 读取下面的选择框的数据 }}</span>
                      <br>
                      <div>  
                            <van-icon name="gold-coin-o" />  
                            <span>460.00</span>  
                        </div>  
                  </div>
                </div>
                   <!-- 规格:读取数据库，判断是否存在规格 -->
                   <div v-if="true">
                          <span>口味{{ 读取数据库 }}</span>
                          <br>
                          <van-radio-group v-model="checked" direction="horizontal">
                            <van-radio name="1">单选框 1</van-radio>
                            <van-radio name="2">单选框 2</van-radio>
                            <van-radio name="3">单选框 2</van-radio>
                          </van-radio-group>
                    </div>
                    <!-- 数量 -->
                     <div style="display: flex;justify-content: space-between;">
                        <span>数量:</span>
                        <van-stepper v-model="value" />
                     </div>
                     <van-button round  color="orange" style="width: 100%;margin-top: 20px;">完成</van-button>
            </div>
      </van-action-sheet>
        <van-action-bar-button type="warning" text="加入购物车" @click="togshow" />
        <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>

</template>

<script setup>
import { defineComponent, ref } from "vue"
//1.引入swiper组件包括css
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay,Navigation,Pagination,Scrollbar} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//返回上一级
const onClickLeft = () => history.back();

const modules=[Autoplay,Navigation,Pagination,Scrollbar];
//分享功能
const showShare = ref(false);
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: '小飞机', icon: 'guide-o' },
      { name: '复制链接', icon: 'link' },  
    ];
const onSelect = (option) => {
      showToast(option.name);
      showShare.value = false;
};

//收藏功能
const isCollected=ref(false)
const collect=()=>{
  isCollected.value = !isCollected.value;  
}

//得到我加入购物车多少件
const totalCounters=localStorage.getItem('sum')
//加入购物车的动作面板
const show = ref(false);
const togshow=()=>{
  show.value = !show.value; 
}

//规格的选择
const checked = ref('1');
//数量的选择
const value = ref(1);
</script>

<style scoped>
  .tag{
    position: absolute;
    top: 200px;
    right: 35px;
}
.red-icon {
  color: red; 
}
.content {
    padding: 16px 16px 160px;
  }
</style>
