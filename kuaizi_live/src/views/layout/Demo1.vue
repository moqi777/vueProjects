<template>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :loosing-text="'释放刷新'">
    
    <!-- 顶部导航 -->
     <div class="big"><div class="banner">
      <van-row class="top_div">
        <van-col span="10" @click="router.push('/')">
          <van-sticky :offset-top="10" style="z-index: 9999;">
            <svg-icon iconName="icon-dizhiguanli"/>
          </van-sticky>
          <span>&nbsp;&nbsp;{{ address }}<van-icon name="arrow" style="color: gray;"/></span>
        </van-col>
        <van-col span="12">
        </van-col>
        <van-col span="2" @click="router.push('/')">
          <svg-icon iconName="icon-chat"/>
        </van-col>
      </van-row>
      <van-sticky @change="ceiling">
        <div class="serch_div" @click="router.push('/')">
          <van-row class="serch">
          <van-col span="8"><van-icon name="search" size="30px" style="margin: 3px"/></van-col>
          <van-col span="12"></van-col>
          <van-col span="4" style="display: flex;justify-content: flex-end;">
            <div class="serch_text">搜 索</div>&nbsp;
          </van-col>
        </van-row>
        </div>
        </van-sticky>
     </div>
         <!-- 各类功能排列 -->
        <van-grid :column-num="5" class="icons" :border="false">
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity1.png" />
                <p>美食外卖</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity2.png" />
                <p>正品商城</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity3.png" />
                <p>充值缴费</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity4.png" />
                <p>国际货运</p>
            </van-grid-item>
            <van-grid-item/>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity5.png" />
                <p>房产租售</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity6.png" />
                <p>同城跑腿</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity7.png" />
                <p>多国签证</p>
            </van-grid-item>
            <van-grid-item/><van-grid-item/>
            <van-grid-item icon="photo-o" text="文字" class="icon-item">
                <img src="../../assets/app_img/demo1_activity8.png" />
                <p>旅游度假</p>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字" class="icon-item" @click="router.push('/economics')">
                <img src="../../assets/app_img/demo1_activity9.png" />
                <p>家政服务</p>
            </van-grid-item>
            <van-grid-item/><van-grid-item/><van-grid-item/>
        </van-grid>
    </div> 
    
    <!-- 具体业务内容展示 -->
     <div style="margin-top: 270px;width: 92%;margin-left: auto;margin-right: auto;">
      <!-- 标签页 -->
      <van-tabs 
        v-model:active="active" 
        title-active-color="orange"  
        swipeable color="orange" 
        sticky 
        :offset-top="50"
        line-width="25%">
        <!-- 推荐显示 -->
      <van-tab title="推荐">
        <div style="display: flex;justify-content: space-between;">
          <!-- 左 -->
            <div class="list_left" style="width: 48%;">
                <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==1">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FDF1C4" 
                            style="width: 40px;height: 20px;color: #F0863E;" 
                            size="mini"
                            v-if="item.show_type==0">
                          外 卖</van-button>
                        <van-button 
                            color="#C5E0FF" 
                            style="width: 40px;height: 20px;color: #5286E3;" 
                            size="mini"
                            v-if="item.show_type==1">
                          商 城</van-button>
                        <van-button 
                            color="#FF4674" 
                            style="width: 40px;height: 20px;color: #FFF1F7;" 
                            size="mini"
                            v-if="item.show_type==2">
                          到 店</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==0" style="margin-top: 10px;">
                        <svg-icon iconName="icon-hongxingxing"/>&nbsp;
                        <span style="font-size: 15px;color: #FF1E45;">{{ item.grade }}</span>
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;销量 {{ item.sale }}</span>
                      </div>
                      <div v-if="item.show_type==1" style="margin-top: 10px;">
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                      <div v-if="item.show_type==2" style="margin-top: 10px;">
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;&nbsp;&nbsp;销量 {{ item.sale }}</span><br>
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
            </div>
            <!-- 右 -->
          <div class="list_right" style="width: 48%;height: 500px;">
            <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==0">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FDF1C4" 
                            style="width: 40px;height: 20px;color: #F0863E;" 
                            size="mini"
                            v-if="item.show_type==0">
                          外 卖</van-button>
                        <van-button 
                            color="#C5E0FF" 
                            style="width: 40px;height: 20px;color: #5286E3;" 
                            size="mini"
                            v-if="item.show_type==1">
                          商 城</van-button>
                        <van-button 
                            color="#FF4674" 
                            style="width: 40px;height: 20px;color: #FFF1F7;" 
                            size="mini"
                            v-if="item.show_type==2">
                          到 店</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==0" style="margin-top: 10px;">
                        <svg-icon iconName="icon-hongxingxing"/>&nbsp;
                        <span style="font-size: 15px;color: #FF1E45;">{{ item.grade }}</span>
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;销量 {{ item.sale }}</span>
                      </div>
                      <div v-if="item.show_type==1" style="margin-top: 10px;">
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                      <div v-if="item.show_type==2" style="margin-top: 10px;">
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;&nbsp;&nbsp;销量 {{ item.sale }}</span><br>
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
          </div>
        </div>
      </van-tab>
      <!-- 商城显示 -->
      <van-tab title="商城">
        <div style="display: flex;justify-content: space-between;">
          <!-- 左 -->
            <div class="list_left" style="width: 48%;">
                <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==1&&item.show_type==1">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#C5E0FF" 
                            style="width: 40px;height: 20px;color: #5286E3;" 
                            size="mini"
                            v-if="item.show_type==1">
                          商 城</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==1" style="margin-top: 10px;">
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
            </div>
            <!-- 右 -->
          <div class="list_right" style="width: 48%;height: 500px;">
            <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==0&&item.show_type==1">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#C5E0FF" 
                            style="width: 40px;height: 20px;color: #5286E3;" 
                            size="mini"
                            v-if="item.show_type==1">
                          商 城</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==1" style="margin-top: 10px;">
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
          </div>
        </div>
      </van-tab>
      <!-- 外卖显示 -->
      <van-tab title="外卖">
        <div style="display: flex;justify-content: space-between;">
          <!-- 左 -->
            <div class="list_left" style="width: 48%;">
                <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==1&&item.show_type==0">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FDF1C4" 
                            style="width: 40px;height: 20px;color: #F0863E;" 
                            size="mini"
                            v-if="item.show_type==0">
                          外 卖</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==0" style="margin-top: 10px;">
                        <svg-icon iconName="icon-hongxingxing"/>&nbsp;
                        <span style="font-size: 15px;color: #FF1E45;">{{ item.grade }}</span>
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;销量 {{ item.sale }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
            </div>
            <!-- 右 -->
          <div class="list_right" style="width: 48%;height: 500px;">
            <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==0&&item.show_type==0">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FDF1C4" 
                            style="width: 40px;height: 20px;color: #F0863E;" 
                            size="mini"
                            v-if="item.show_type==0">
                          外 卖</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==0" style="margin-top: 10px;">
                        <svg-icon iconName="icon-hongxingxing"/>&nbsp;
                        <span style="font-size: 15px;color: #FF1E45;">{{ item.grade }}</span>
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;销量 {{ item.sale }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
          </div>
        </div>
      </van-tab>
      <van-tab title="到店优惠">
        <div style="display: flex;justify-content: space-between;">
          <!-- 左 -->
            <div class="list_left" style="width: 48%;">
                <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==1&&item.show_type==2">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FF4674" 
                            style="width: 40px;height: 20px;color: #FFF1F7;" 
                            size="mini"
                            v-if="item.show_type==2">
                          到 店</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==2" style="margin-top: 10px;">
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;&nbsp;&nbsp;销量 {{ item.sale }}</span><br>
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
            </div>
            <!-- 右 -->
          <div class="list_right" style="width: 48%;height: 500px;">
            <van-list
                  v-model:loading="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <template v-for="item,i in list">
                    <div class="list_div" v-if="i%2==0&&item.show_type==2">
                      <van-image radius="10px" width="100%" height="70%" :src="getImageUrl(item.img)"/>
                      <span style="display: flex;">
                        <van-button 
                            color="#FF4674" 
                            style="width: 40px;height: 20px;color: #FFF1F7;" 
                            size="mini"
                            v-if="item.show_type==2">
                          到 店</van-button>
                        &nbsp;&nbsp;&nbsp;{{ item.name }}
                      </span>
                      <div v-if="item.show_type==2" style="margin-top: 10px;">
                        <span style="font-size: 15px;color: gray;">&nbsp;&nbsp;&nbsp;&nbsp;销量 {{ item.sale }}</span><br>
                        <span style="font-size: 19px;color: #FF1E45;">&nbsp;&nbsp;&nbsp;￥{{ item.price }}</span>
                      </div>
                    </div>
                  </template>
                </van-list>
          </div>
        </div>
      </van-tab>
    </van-tabs>
     </div>

    </van-pull-refresh>
    </template>
    
    <script setup>
    import {ref} from "vue"
    import { useRouter } from "vue-router";//导入路由 可以路由跳转
    import { showToast } from 'vant';
    const router=useRouter();//定义路由对象
    const address = ref('马尼拉')
    //外卖：图片 品名 评分 销量 0
    //商城：图片 品名 描述 价格 1 
    //到店：图片 品名 销量 价格 2
    const list = ref([])
    //刷新触发函数
    const loading = ref(false);//是否加载更多数据
    const finished = ref(false);//是否已经加载完毕，加载完成后不再触发load事件
    const refreshing = ref(false);//是否处在刷新状态
    //用于解析图片本地地址
    const getImageUrl=(imgPath)=> {
      return require('../../assets'+imgPath); 
    }
    //触底新增数据函数
    const onLoad = () => {
      console.log(123);
      
      //异步更新数据
      for(let i=0;i<10;i++){
        list.value.push({
            show_type:0,
            img:"/take-out/test.png",
            name:"A04猪脚拼饭烧鸭",
            sale:"0",
            grade:"3.7",
            price:null,
          })
      list.value.push({
        show_type:1,
          img:"/shopping_mall/test.png",
          name:"自然派蜜汁味/炭烧味猪肉铺75g",
          sale:null,
          grade:"0",
          price:200.00
      })
      list.value.push({
        show_type:2,
          img:"/reach_the_store/test.png",
          name:"酒店套房",
          sale:"4",
          grade:null,
          price:2500
        })
      }
      // 对所有的标题进行长度限制
      list.value.forEach(item => {
        if (item.name.length > 10) {
          item.name = item.name.substring(0, 9) + '...';
        }
      });
      loading.value=false//等于true的时候触底就不会调用onLoad函数了
      //异步请求回来后
      refreshing.value=false
      //数据库中数据读完了
      //finished.value=true
    };
    //刷新函数
    const onRefresh = () => {
      finished.value = false;

      // 重新加载数据
      list.value=[]
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      
      onLoad();
    };
    
    //广告函数
    const advertisement =(()=>{});
    //吸顶时触发
    const ceiling = (isSticky) => {
      let search = document.getElementsByClassName('serch')[0];
      let serch_div = document.getElementsByClassName('serch_div')[0];
      let serch = document.getElementsByClassName('serch')[0];
      let serch_text = document.getElementsByClassName('serch_text')[0];
      if (isSticky) {
        // 如果处于吸顶状态，缩短搜索框宽度，增加地址栏宽度
        search.style.width = "85%";
        serch_div.style["background-color"] = "white";
        serch.style.border = "1px solid #FF4724";
        serch_text.style["background-color"] = "#FF4724";
      } else {
        // 如果没有吸顶，恢复原来的宽度
        search.style.width = "92%";
        serch_div.style["background-color"] = null;
        serch.style.border = "1px solid black";
        serch_text.style["background-color"] = "black";
      }
    };

    </script>
    
    <style scoped>
    .big{
      width: 100%;
      height: 180px;
      background-color: #F8A99B;
    }
    .banner{
      width: 100%;
      height: 150px;
      background-image: url(../../assets/app_img/banner.png);
      background-size: 100% 100%;
      padding-top: 5px;
    }
    .top_div{
      width: 95%;
      height: 30px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
    }
    .top_div ::v-deep .van-col{
      display: flex;
      align-items: center;
      font-size: 13px;
    }
    .top_div ::v-deep .svg-icon{
      width: 25px;
      height: 25px;
    }
    /* 搜索框 */
    .serch_div{
      display: flex;
      justify-content: flex-end;
      padding-bottom: 10px
    }
    .serch{
      width: 92%;
      height: 35px;
      margin-right: 4%;
      background-color: white;
      border-radius: 20px;
      margin-top: 5px;
      border: 1px solid black;
    }
    .serch_text{
      width: 53px;
      height:30px; 
      background-color: black;
      border-radius: 20px;
      margin-top: 3px;
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }
    
    .icons {
      width: 92%;
      height: 270px;
      padding: 10px;
      padding-top: 10px;
      margin: auto;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 0px 1px gray;
    }
    
    .icon-item {
        height: 90px;
    }
    
    .icon-item img {
    background-size: 100% 100%;
      width: 50px;
      height: 50px;
    }
    
    .icon-item p {
      margin-top: 5px;
      font-size: 14px;
      text-align: center;
    }
    /* 显示的内容 */
    .list_div{
      width: 100%;
      height: 260px;
      border-radius: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      box-shadow: 0px 1px 1px gray;
    }
    
    </style>
    