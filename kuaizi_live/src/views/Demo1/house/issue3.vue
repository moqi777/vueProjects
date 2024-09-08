<template>
    <van-sticky>
        <van-nav-bar
        title="求购"
        left-arrow
        @click-left="onClickLeft"
        style="color: gray;"
        />
    </van-sticky>
    <!-- 内容主题 -->
    <div class="big">
    <!-- 房源信息 -->
    <span style="margin: 20px;">房源信息</span>
    <van-cell-group inset style="margin-top: 10px;margin-bottom: 10px">
      <!-- 求购标题 -->
      <van-field
        v-model="house.property.title"
        required
        label="求购标题"
        placeholder="请填写30个字以内的求购标题"
        input-align="right"
        maxlength="30"
      />
      <!-- 房源户型 -->
      <van-field
        v-model="result1"
        is-link
        required
        readonly
        name="picker"
        label="房源户型"
        placeholder="请选择房源户型"
        input-align="right"
        @click="showPicker1 = true"
        />
        <van-popup v-model:show="showPicker1" position="bottom">
        <van-picker
            :columns="columns1"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
        />
        </van-popup>
        <!-- 房源面积 -->
        <van-field
            v-model="house.property.area"
            required
            type="number"
            label="房源面积"
            placeholder="请填写房源面积(m²)"
            input-align="right"
            maxlength="9"
        />
        <!-- 房源售价 -->
        <van-field
            v-model="house.property.price"
            required
            type="number"
            label="房源售价"
            placeholder="请填写期望售价"
            input-align="right"
            maxlength="9"
        />
        <div :class="['face_button', { 'active': isNegotiable }]" 
         @click="toggleNegotiable">
            <span>面议</span>
        </div>
        <!-- 有无阳台 -->
        <van-field
        v-model="result2"
        is-link
        required
        readonly
        name="picker"
        label="有无阳台"
        placeholder="请选择有无阳台"
        input-align="right"
        @click="showPicker2 = true"
        />
        <van-popup v-model:show="showPicker2" position="bottom">
        <van-picker
            :columns="columns2"
            @confirm="onConfirm2"
            @cancel="showPicker2 = false"
        />
        </van-popup>
        <!-- 装修类型 -->
        <van-field
        v-model="result3"
        is-link
        required
        readonly
        name="picker"
        label="装修类型"
        placeholder="请选择装修类型"
        input-align="right"
        @click="showPicker3 = true"
        />
        <van-popup v-model:show="showPicker3" position="bottom">
        <van-picker
            :columns="columns3"
            @confirm="onConfirm3"
            @cancel="showPicker3 = false"
        />
        </van-popup>
        <!-- 所在区域 -->
        <van-field
        v-model="result4"
        is-link
        required
        readonly
        name="picker"
        label="所在区域"
        placeholder="请选择房源所在区域"
        input-align="right"
        @click="showPicker4 = true"
        />
        <van-popup v-model:show="showPicker4" position="bottom">
        <van-picker
            :columns="columns4"
            @confirm="onConfirm4"
            @cancel="showPicker4 = false"
        />
        </van-popup>
        <!-- 房源特色 -->
        <van-field
        v-model="house.property.features"
        is-link
        readonly
        name="picker"
        label="房源特色"
        placeholder="请选择房源特色"
        input-align="right"
        @click="showPicker6 = true"
        />
        <van-popup v-model:show="showPicker6" position="bottom">
            <!-- 复选框 -->
        <div style="width: 100%;height: 310px">
            <div class="chockbox_top">
                <span style="color: #969799;" @click="showPicker6=false">取消</span>
                <span style="color: #1989FA;" @click="OK6">确定</span>
            </div>
            <van-checkbox-group v-model="checked6">
                <van-cell-group inset>
                    <van-cell
                    v-for="(item, index) in list6"
                    clickable
                    :key="item"
                    :title="item"
                    @click="toggle6(index)"
                    >
                    <template #right-icon>
                        <van-checkbox
                        :name="item"
                        :ref="el => checkboxRefs6[index] = el"
                        @click.stop
                        />
                    </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </div>
        </van-popup>
            <!-- 房源设备 -->
            <van-field
        v-model="house.property.equipment"
        is-link
        readonly
        name="picker"
        label="房源设备"
        placeholder="请选择房源设备"
        input-align="right"
        @click="showPicker7 = true"
        />
        <van-popup v-model:show="showPicker7" position="bottom">
            <!-- 复选框 -->
        <div style="width: 100%;height: 310px">
            <div class="chockbox_top">
                <span style="color: #969799;" @click="showPicker7=false">取消</span>
                <span style="color: #1989FA;" @click="OK7">确定</span>
            </div>
            <van-checkbox-group v-model="checked7">
                <van-cell-group inset>
                    <van-cell
                    v-for="(item, index) in list7"
                    clickable
                    :key="item"
                    :title="item"
                    @click="toggle7(index)"
                    >
                    <template #right-icon>
                        <van-checkbox
                        :name="item"
                        :ref="el => checkboxRefs7[index] = el"
                        @click.stop
                        />
                    </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </div>
        </van-popup>
    </van-cell-group>
    <!-- 房源详情 -->
    <span style="margin: 20px;">房源详情</span>
    <div class="text">
        <van-field
            v-model="house.property.details"
            rows="2"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请输入200个字以内的房源详情"
            show-word-limit
            style="border: 1px solid #F4F4F4;height: auto;"
        />
    </div>
    <!-- 联系信息 -->
    <span style="margin: 20px;">联系信息</span>
    <van-cell-group inset style="margin-top: 10px;margin-bottom: 10px">
        <!-- 发布人身份 -->
        <van-field
        v-model="result8"
        is-link
        readonly
        name="picker"
        label="发布人身份"
        placeholder="请选择发布人身份"
        input-align="right"
        @click="showPicker8 = true"
        />
        <van-popup v-model:show="showPicker8" position="bottom">
        <van-picker
            :columns="columns8"
            @confirm="onConfirm8"
            @cancel="showPicker8 = false"
        />
        </van-popup>
        <!-- 交流语言 -->
        <van-field
        v-model="result9"
        is-link
        readonly
        name="picker"
        label="交流语言"
        placeholder="请选择交流语言"
        input-align="right"
        @click="showPicker9 = true"
        />
        <van-popup v-model:show="showPicker9" position="bottom">
        <van-picker
            :columns="columns9"
            @confirm="onConfirm9"
            @cancel="showPicker9 = false"
        />
        </van-popup>
        <!-- 联系电话 -->
        <van-field
        v-model="house.contact.phone"
        required
        type="number"
        label="联系电话"
        placeholder="请填写联系电话"
        input-align="right"
        maxlength="15"
        />
        <!-- 微信号码 -->
        <van-field
        v-model="house.contact.wechat"
        label="微信号码"
        placeholder="请填写微信号码"
        input-align="right"
        maxlength="20"
        />
        <!-- Telegram号 -->
        <van-field
        v-model="house.contact.telegram"
        label="Telegram号"
        placeholder="请填写Telegram号"
        input-align="right"
        maxlength="20"
        />
    </van-cell-group>
    </div>
    <!-- 底部 发布 -->
    <div class="botton_div">
        <div class="issue" @click="submit"><span>付费发布0￥/次</span></div>
    </div>
    </template>
    
    <script setup>
    import {ref,onBeforeUpdate} from "vue"
    import { useRouter } from "vue-router";
    import api from '../../../api/index'
    const router = useRouter();
    const house = ref({user:{},contact:{},property:{imgs:[{}]}})//用于存储用户输入的数据
    const onClickLeft = () => router.push('/issue_home');//返回上一级
    // 房源户型
    const result1 = ref('');
    const showPicker1 = ref(false);
    const columns1 = [
        { text: 'Studio', value: 0 },
        { text: '一室户', value: 1 },
        { text: '二室户', value: 2 },
        { text: '三室户', value: 3 },
        { text: '别墅', value: 4 },
        { text: '其他', value: 5 },
    ];
    const onConfirm1 = ({ selectedOptions }) => {
        result1.value = selectedOptions[0]?.text;
        house.value.property.houseType = selectedOptions[0]?.value;
        showPicker1.value = false;
    };
    // 处理面议按钮点击
    const isNegotiable = ref(false);
    const toggleNegotiable = () => {
      isNegotiable.value = !isNegotiable.value;
      house.value.property.price = isNegotiable.value ? -1 : '';
    
      const button = document.querySelector('.face_button');
      
      if (isNegotiable.value) {
        button.style.backgroundColor = '#8E6DF7';  // 激活时的颜色
        button.style.color = 'white';  // 文字颜色
      } else {
        button.style.backgroundColor = '#F4F4F4';  // 未激活时的颜色
        button.style.color = 'gray';  // 文字颜色
      }
    };
    // 有无阳台
    const result2 = ref('');
    const showPicker2 = ref(false);
    const columns2 = [
        { text: '有阳台', value: 1 },
        { text: '无阳台', value: 0 },
    ];
    const onConfirm2 = ({ selectedOptions }) => {
        result2.value = selectedOptions[0]?.text;
        house.value.property.balcony = selectedOptions[0]?.value;
        showPicker2.value = false;
    };
    // 装修类型
    const result3 = ref('');
    const showPicker3 = ref(false);
    const columns3 = [
        { text: '普通装修', value: 0 },
        { text: '中等装修', value: 1 },
        { text: '精装修', value: 2 },
    ];
    const onConfirm3 = ({ selectedOptions }) => {
        result3.value = selectedOptions[0]?.text;
        house.value.property.decoration = selectedOptions[0]?.value;
        showPicker3.value = false;
    };
    // 所在区域
    const result4 = ref('');
    const showPicker4 = ref(false);
    const columns4 = [
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
    const onConfirm4 = ({ selectedOptions }) => {
        result4.value = selectedOptions[0]?.text;
        house.value.property.region = selectedOptions[0]?.value;
        showPicker4.value = false;
    };
    // 房源特色
    const showPicker6 = ref(false);
    const checked6 = ref([]);
    const checkboxRefs6 = ref([]);
    const list6 = ref(['配套齐全', '绿化好','地铁近'])
    const toggle6 = (index) => {
        checkboxRefs6.value[index].toggle();
    };
    onBeforeUpdate(() => {
        checkboxRefs6.value = [];
    });
    const OK6 = ()=>{
        house.value.property.features=checked6.value.join(',');
        showPicker6.value=false;
    }
    // 房源设备
    const showPicker7 = ref(false);
    const checked7 = ref([]);
    const checkboxRefs7 = ref([]);
    const list7 = ref(['洗衣机','空调','柜子','电视','冰箱','热水器','床','暖气','宽带','天然气'])
    const toggle7 = (index) => {
        checkboxRefs7.value[index].toggle();
    };
    onBeforeUpdate(() => {
        checkboxRefs7.value = [];
    });
    const OK7 = ()=>{
        house.value.property.equipment=checked7.value.join(',');
        showPicker7.value=false;
    }
    // 发布人身份
    const result8 = ref('');
    const showPicker8 = ref(false);
    const columns8 = [
        { text: '个人', value: 0 },
        { text: '中介', value: 1 },
    ];
    const onConfirm8 = ({ selectedOptions }) => {
        result8.value = selectedOptions[0]?.text;
        house.value.contact.posterType = selectedOptions[0]?.value;
        showPicker8.value = false;
    };
    // 交流语言
    const result9 = ref('');
    const showPicker9 = ref(false);
    const columns9 = [
        { text: '菲律宾语', value: 0 },
        { text: '英语', value: 1 },
        { text: '中文', value: 2 },
    ];
    const onConfirm9 = ({ selectedOptions }) => {
        result9.value = selectedOptions[0]?.text;
        house.value.contact.language = selectedOptions[0]?.value;
        showPicker9.value = false;
    };
    //提交发布
    const submit=()=>{
      // 先进行表单验证
      if (house.value.property.title === '' || house.value.property.title === undefined) {
        showToast('求购标题为空');
        return;
      }
      if (house.value.property.houseType === '' || house.value.property.houseType === undefined) {
        showToast('房源户型为空');
        return;
      }
      if (house.value.property.area === '' || house.value.property.area === undefined) {
        showToast('房源面积为空');
        return;
      }
      if (house.value.property.price === '' || house.value.property.price === undefined) {
        showToast('房源售价为空');
        return;
      }
      if (house.value.property.balcony === '' || house.value.property.balcony === undefined) {
        showToast('有无阳台未选择');
        return;
      }
      if (house.value.property.decoration === '' || house.value.property.decoration === undefined) {
        showToast('装修类型为空');
        return;
      }
      if (house.value.property.region === '' || house.value.property.region === undefined) {
        showToast('所在区域为空');
        return;
      }
      if (house.value.contact.phone === '' || house.value.contact.phone === undefined) {
        showToast('联系号码为空');
        return;
      }
    
        //将当前登录的用户信息传入
        house.value.user.userName = JSON.parse(localStorage.getItem('admin')).userName;
        //写入是求购
        house.value.propertyType = 2;
        api.postReq('/khouse/addIssue3',house.value).then(res=>{
            showToast('等待审核');
            router.push('/issue_home')
        })
    }
    </script>
    
    <style scoped>
    .big{
        width: 100%;
        background-color: #F4F4F4;
        padding-top: 10px;
        padding-bottom: 120px;
    }
    /* 面议按钮 */
    .face_button{
        width: 45px;
        height: 25px;
        background-color: #F4F4F4;
        position: absolute;
        top: 250px;
        left: 100px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: gray;
        border-radius: 5px;
    }
    /* 控制输入框高度 */
    ::v-deep .van-field{
        height: 50px;
        display: flex;
        align-items: center;
    }
    /* 复选弹出框顶部取消与确定 */
    .chockbox_top{
        display: flex;
        padding: 10px;
        justify-content: space-between;
        font-size: 15px;
        background-color: white;
        position: sticky;
        top: 0;
        z-index: 10;
    }
    /* 文件上传 */
    .upload{
        width: 87%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: white;
        padding: 10px;
        font-size: 13px;
        color: gray;
    }
    /* 房源详情 */
    .text{
        width: 87%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: white;
        padding: 10px;
        font-size: 13px;
        color: gray;
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
    .issue{
        width: 85%;
        height: 60%;
        background-color: #8E6DF7;
        color: white;
    }
    </style>
    