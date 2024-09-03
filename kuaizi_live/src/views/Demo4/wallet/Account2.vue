<template>
<van-nav-bar
  title="充值话费"
  left-text
  right-text="缴费记录"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-form @submit="onSubmit">

        <van-row >
            <van-col span="20">
                <van-field v-model="phone" label="电话号码"
                type="tel" name="phone"  maxlength="11" clearable/>
            </van-col>
            
            <van-col span="4" >
                <div class="TB" >
                <van-icon name="friends"/>
            </div>
            </van-col>
        </van-row>
        <!-- 分割线 -->
        <van-divider/>
        <van-tabs v-model:active="active">
  <van-tab title="充话费">
<van-row>
  <van-col span="8">
    <van-button
    @click="re1"
  plain
  class="an_niu"
  type="primary"
>
    <div> 
    <van-field
        :model-value="recharge1"
        readonly
      />
      <van-field
        placeholder="售价￥50"
        readonly
      />
    </div>
</van-button>
  </van-col>
  
  <van-col span="8">
    <van-button
    @click="re2"
  plain
  class="an_niu"
  type="primary"
>
    <div>
    <van-field
        :model-value="recharge2"
        
        readonly
      />
      <van-field
        placeholder="售价￥100"
        readonly
      />
    </div>
    </van-button>
  </van-col>
  <van-col span="8">
    <van-button
    @click="re3"
  plain
  class="an_niu"
  type="primary"
>
    <div>
    <van-field
        :model-value="recharge3"
        
        readonly
      />
      <van-field
        placeholder="售价￥300"
        readonly
      />
    </div>
    </van-button>
  </van-col>
</van-row>
<van-row>
   <van-col span="8">
    <van-button
    @click="re4"
  plain
  class="an_niu"
  type="primary"
>
     <div>
     <van-field
         :model-value="recharge4"
         
         readonly
       />
       <van-field
         placeholder="售价￥500"
         readonly
       />
     </div>
     </van-button>
   </van-col>
   <van-col span="8">
    <van-button
    @click="re5"
  plain
  class="an_niu"
  type="primary"
>
     <div>
     <van-field
         :model-value="recharge5"
         
         readonly
       />
       <van-field
         placeholder="售价￥1000"
         readonly
       />
     </div>
     </van-button>
   </van-col>
 </van-row>
   <!-- 分割线 -->
   <van-divider/>
   <van-col>
     <div>
        你充值的金额为
     <van-field
     v-model:model-value="recharge"
         name="recharge"
         readonly
       />
       <span>
       <van-field
     v-model:model-value="money2"
         readonly
       />
    </span>
     </div>
   </van-col>
   <van-col>
    总计<van-field
     v-model:model-value="money"
     name="money"
         readonly
       /></van-col>
  </van-tab>
  <van-tab title="充流量">
    <van-row>
  <van-col span="8">
    <van-button
    @click="fl1"
  plain
  class="an_niu"
  type="primary"
>
    <div> 
    <van-field
        :model-value="flow1"
        readonly
      />
      <van-field
        placeholder="售价￥50"
        readonly
      />
    </div>
</van-button>
  </van-col>
  
  <van-col span="8">
    <van-button
    @click="fl2"
  plain
  class="an_niu"
  type="primary"
>
    <div>
    <van-field
        :model-value="flow2"
        readonly
      />
      <van-field
        placeholder="售价￥100"
        readonly
      />
    </div>
    </van-button>
  </van-col>
  <van-col span="8">
    <van-button
    @click="fl3"
  plain
  class="an_niu"
  type="primary"
>
    <div>
    <van-field
        :model-value="flow3"
        
        readonly
      />
      <van-field
        placeholder="售价￥300"
        readonly
      />
    </div>
    </van-button>
  </van-col>
</van-row>
<van-row>
   <van-col span="8">
    <van-button
    @click="fl4"
  plain
  class="an_niu"
  type="primary"
>
     <div>
     <van-field
         :model-value="flow4"
         
         readonly
       />
       <van-field
         placeholder="售价￥500"
         readonly
       />
     </div>
     </van-button>
   </van-col>
   <van-col span="8">
    <van-button
    @click="fl5"
  plain
  class="an_niu"
  type="primary"
>
     <div>
     <van-field
         :model-value="flow5"
         readonly
       />
       <van-field
         placeholder="售价￥1000"
         readonly
       />
     </div>
     </van-button>
   </van-col>
 </van-row>
 <!-- 分割线 -->
 <van-divider/>
 <van-col>
     <div>
        你充值的金额为
     <van-field
     v-model:model-value="flow"
         name="flow"
         readonly
       />
       <van-field
     v-model:model-value="money3"
         readonly
       />
     </div>
   </van-col>
   <van-col>
    总计<van-field
     v-model:model-value="money"
     name="money"
         readonly
       /></van-col>
 
  </van-tab>
</van-tabs>

<!-- 优惠券 -->
 
<van-row style="justify-content: center;">
  <van-col span="20">
    <van-field
        label="优惠券"
        readonly=""
        @click="show" 
      />
    </van-col>
    <van-col span="4">
    <van-field
        is-link
        readonly=""
        @click="show" 
      />
      </van-col> 
    </van-row>
     <!-- 弹出层 -->
  <van-popup
    v-model:show="showPopup"
    closeable
    position="bottom"
    :style="{ height: '60%' }"
  >
  <!-- 弹出层内容 -->
    <div>
        <van-cell >
            <van-row style="text-align: left;">
            <van-col span="18" style="font-size: 20px;">选择优惠券</van-col>
            <van-col span="6">使用规则</van-col>
        </van-row>
        </van-cell>
        
        <van-tabs v-model:active="active">
        <van-tab title="可用优惠卷(0)">内容 1</van-tab>
        <van-tab title="不可用优惠卷(0)">内容 2</van-tab>
        </van-tabs>
    </div>
  </van-popup>
  <!-- 充值按钮 -->
  <van-button round block type="danger" native-type="submit">
      立即充值
    </van-button>
<div class="wen_ben">
<van-divider vertical />
    套餐查询
    <van-divider vertical :style="{ borderColor: '#1989fa' }" />
    话费查询
    <van-divider vertical :style="{ borderColor: '#1989fa' }" />
    充值必看
    <van-divider vertical :style="{ borderColor: '#1989fa' }" />
</div>
<!-- 分割线 -->
<van-divider/>
<h4>更多服务</h4>
<!-- 分割线 -->
<van-divider/>
<van-grid column-num="4" :border="false">
        <van-grid-item to="/">
            <van-icon name="cluster-o" /> <span>缴纳电费</span>
        </van-grid-item>
        <van-grid-item to="/">
            <van-icon name="cashier-o" /><span>缴纳网费</span>
        </van-grid-item>
        <van-grid-item to="/">
            <el-icon><HotWater /></el-icon> <span>缴纳水费</span>
        </van-grid-item>
        <van-grid-item to="/">
            <el-icon><CameraFilled /></el-icon> <span>拍照缴费</span>
        </van-grid-item>
        </van-grid>
<!-- 分割线 -->
<van-divider/>
</van-form>
</template>

<script setup>
import {ref,computed} from "vue"

const recharge=ref(0)
const money=ref(0)

const money2=ref(0)
const money3=ref(0)
const recharge1=ref(50)
const recharge2=ref(100)
const recharge3=ref(300)
const recharge4=ref(500)
const recharge5=ref(1000)
const flow=ref()
const flow1=ref('7G')
const flow2=ref('22G')
const flow3=ref('32G')
const flow4=ref('52G')
const flow5=ref('102G')
const phone=ref()

const fl1=()=>{
    flow.value=flow1.value
    money3.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const fl2=()=>{
    flow.value=flow2.value
    money3.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const fl3=()=>{
    flow.value=flow3.value
    money3.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const fl4=()=>{
    flow.value=flow4.value
    money3.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const fl5=()=>{
    flow.value=flow5.value
    money3.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const re1=()=>{
    recharge.value=recharge1.value
    money2.value=recharge1.value
    money.value=Number(money2.value) + Number(money3.value);
}
const re2=()=>{
    recharge.value=recharge2.value
    money2.value=recharge2.value
    money.value=Number(money2.value) + Number(money3.value);
}
const re3=()=>{
    recharge.value=recharge3.value
    money2.value=recharge3.value
    money.value=Number(money2.value) + Number(money3.value);
}
const re4=()=>{
    recharge.value=recharge4.value
    money2.value=recharge4.value
    money.value=Number(money2.value) + Number(money3.value);
}
const re5=()=>{
    recharge.value=recharge5.value
    money2.value=recharge5.value
    money.value=Number(money2.value) + Number(money3.value);
}

//弹出层
const showPopup=ref(false)

const show =()=>{
  showPopup.value=true
}
const show2=()=>{
  showPopup.value=false
}
// 充值按钮提交的数据
const onSubmit = (values) => {
  console.log('submit', values);
}

const onClickLeft = () => history.back();
    const onClickRight = () => showToast('暂无记录');
</script>

<style scoped>
.TB{
    text-align: center;
    justify-content: center;
    padding: 14px;
}
.an_niu{
    height: 100px;
}
.wen_ben{
    display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 如果也需要水平居中，则添加此属性 */
  height: 50px; /* 设置容器高度为视口高度 */
}
</style>