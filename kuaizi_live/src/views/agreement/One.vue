<template>
    <van-nav-bar
      title="筷子生活用户协议"
      left-text="返回"
      left-arrow
      @click="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" size="26" color="black" />
      </template>
    </van-nav-bar>
  
    <div class="policy-container">
      <p class="policy-date">
        <strong>更新日期：</strong>2021年9月1日<br />
        <strong>生效日期：</strong>2021年9月1日
      </p>
  
      <p>
        本政策仅适用于广州稻兴信息科技有限公司的筷子生活APP。如
        果您有任何疑问、意见或建议，请通过邮箱
        <a href="mailto:kuaizilife@126.com">kuaizilife@126.com</a>
        与我们联系。我们将尽快审核所涉问题，并在验证您的用户身份后的十五天内予以回复。
      </p>
  
      <p>
        在使用本系统的所有功能之前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用本系统，但如果您使用本系统，您的使用行为将被视为对本声明全部内容的认可。
      </p>
  
      <h2>免责声明</h2>
      <p>
        鉴于本系统使用非人工检索和分析方式，无法确定您输入的条件是否合法，因此本系统对检索和分析出的结果不承担责任。如果因使用本系统的检索和分析结果作为任何商业行为或者学术研究的依据而产生不良后果，本系统不承担任何法律责任。
      </p>
  
      <h2>关于隐私权</h2>
      <p>
        访问者在本系统注册时提供的一些个人资料，本系统除非经您本人同意外，不会以任何方式将用户的任何资料泄露给第三方。当政府部门、司法机关等依照法定程序要求本系统披露个人资料时，本系统将根据执法单位的要求或为公共安全目的提供个人资料，在此情况下的披露，本系统不承担任何责任。
      </p>
  
      <h2>筷子生活使用条款</h2>
      <p>
        筷子生活提供的服务将严格按照规定的程序、服务条款和操作规则执行。会员若完全同意所有服务条款，并完成注册程序，即可成为筷子生活的正式会员。
      </p>
  
      <h3>会员责任</h3>
      <ul>
        <li>会员对其发布的信息负责，应提供详尽、真实准确的企业资料，禁止发布不真实或误导性的信息。</li>
        <li>会员应随时更新注册资料，以确保信息及时、详尽、准确。</li>
        <li>筷子生活提供的会员账号及密码仅供会员使用，如遗失或被盗，会员应及时重置密码并自行承担责任。</li>
        <li>会员应及时通知筷子生活纠正发布的信息中的错误。</li>
        <li>筷子生活拥有商品信息的版权和知识产权，未经筷子生活书面同意，任何人不得复制、散布或出售相关信息。</li>
        <li>如发现会员提供不正确或违法的信息，筷子生活有权发出警告或停止其会员资格。</li>
        <li>会员如违反本协议造成筷子生活经济损失，筷子生活有权追究其经济及法律责任。</li>
      </ul>
  
      <h3>会员权利与义务</h3>
      <ul>
        <li>会员承诺遵守法律法规、社会道德风尚、信息真实性等规定。</li>
        <li>会员注册信息不得包含违法或不良信息。</li>
        <li>筷子生活有权审核会员提交的信息，并对违法信息进行删除处理。</li>
        <li>筷子生活保护用户信息及隐私，接受社会监督，及时处理违法或不良信息。</li>
        <li>会员的行为必须符合国家法律规定，如违反规定造成纠纷或不良后果，会员需独立承担责任。</li>
      </ul>
  
      <h2>法律责任声明</h2>
      <p>
        筷子生活在此特别声明，对以下事宜不承担任何法律责任：
      </p>
      <ol>
        <li>对使用本App或相关内容、服务的任何直接或间接的损失或损害，筷子生活不承担任何责任。</li>
        <li>对由于使用本App链接的其他网站或信息而导致的损失或损害，责任由使用者自行承担。</li>
      </ol>
    </div>
  </template>
  <script setup>
const onClickLeft = () => history.back();
</script>
  <style scoped>
  .policy-container {
    padding: 20px;
    line-height: 1.6;
    font-size: 16px;
    color: #333;
  }
  
  .policy-date {
    margin-bottom: 16px;
    font-size: 14px;
    color: #666;
  }
  
  .policy-container h2 {
    margin-top: 24px;
    font-size: 18px;
    color: #000;
  }
  
  .policy-container h3 {
    margin-top: 20px;
    font-size: 16px;
    color: #000;
  }
  
  .policy-container p {
    margin-bottom: 16px;
  }
  
  .policy-container ul {
    margin-bottom: 16px;
    padding-left: 20px;
  }
  
  .policy-container li {
    margin-bottom: 8px;
  }
  
  .policy-container ol {
    margin-bottom: 16px;
    padding-left: 20px;
  }
  
  .policy-container a {
    color: #FF4724;
    text-decoration: none;
  }
  </style>
  