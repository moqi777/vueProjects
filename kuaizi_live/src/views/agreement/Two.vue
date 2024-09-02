<template>
    <van-nav-bar
      title="筷子生活隐私协议"
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
        筷子生活-广州稻兴信息科技有限公司(以下或称“我们”)非常重视用户（“您”）的信息安全与隐私保护。我们秉承“一切以用户价值为依归”的理念，致力于提升信息处理透明度，增强您对信息管理的便捷性，保障您的信息及通信安全。
      </p>
      <p>
        本隐私政策旨在向您清晰地介绍我们在您使用我们的产品/服务时如何处理您的个人信息，以及我们为您提供的访问、更正、删除和保护这些信息的方式。
      </p>
      <p>
        筷子生活严格遵守法律法规，并遵循以下隐私保护原则，为您提供更加安全、可靠的服务：
      </p>
  
      <ul>
        <li>安全可靠：我们通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。</li>
        <li>自主选择：我们为您提供便利的信息管理选项，便于您管理个人信息。</li>
        <li>保护通信秘密：我们严格遵守法律法规，保护您的通信秘密，提供安全的通信服务。</li>
        <li>合理必要：我们仅收集必要的信息，以便向您和其他用户提供更好的服务。</li>
        <li>清晰透明：我们使用简明易懂的表述向您介绍隐私政策，确保您了解我们的信息处理方式。</li>
        <li>隐私设计：在产品或服务开发的各个环节，我们都融入隐私保护的理念。</li>
      </ul>
  
      <h2>政策概述</h2>
      <p>
        本政策将帮助您了解以下内容：
      </p>
      <ul>
        <li>我们如何收集和使用您的个人信息</li>
        <li>我们如何使用 SDK 技术</li>
        <li>我们如何使用 Cookie 和同类技术</li>
        <li>我们如何共享、转让、公开披露您的个人信息</li>
        <li>我们如何保存和保护您的个人信息</li>
        <li>您如何管理您的个人信息</li>
        <li>未成年人的个人信息保护</li>
        <li>通知和修订</li>
        <li>如何联系我们</li>
      </ul>
  
      <p>
        【特别提示】在使用我们提供的各项产品/服务前，请您仔细阅读并充分理解本《隐私政策》，并作出相应选择。一旦您使用或继续使用我们的产品/服务时，即意味着您同意我们按照本隐私政策处理您的相关信息。
      </p>
      <p>
        如果您对本隐私政策有任何疑问，可以通过本隐私政策中“如何联系我们”的方式与我们联系。
      </p>
      <p>
        请注意，本政策不适用于您通过我们的产品/服务接入的其他第三方产品/服务（“其他第三方”，包括您的交易相对方、任何第三方网站以及第三方服务提供者等）。具体规定请参照该第三方的隐私政策或类似声明。
      </p>
  
      <h2>一、我们如何收集和使用您的个人信息</h2>
      <p>
        在您使用我们的产品/服务时，您可能需要授权我们收集和使用个人信息的场景包括：
      </p>
      <ol>
        <li>
          为了向您提供我们的基本功能，您需要授权我们收集和使用必要的信息。如您拒绝提供必要信息，您将无法正常使用我们的产品/服务。
        </li>
        <li>
          为了向您提供拓展功能，您可以选择授权我们收集和使用相关信息。如您拒绝提供这些信息，您将无法使用相关附加功能，但不会影响您正常使用基本功能。
        </li>
      </ol>
  
      <h3>您需要授权我们收集和使用个人信息的场景</h3>
      <p>
        我们会遵循正当、合法、必要的原则，出于本政策所述的目的收集和使用您的个人信息。
      </p>
      <ol>
        <li>
          帮助您成为我们的用户：为遵守法律法规的要求，并为您提供便捷服务，您在注册成为筷子生活用户时，需要提供手机号以创建筷子生活账号。我们将通过发送短信验证码的方式验证您的身份。
        </li>
      </ol>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
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
  
  .policy-container ul,
  .policy-container ol {
    margin-bottom: 16px;
    padding-left: 20px;
  }
  
  .policy-container li {
    margin-bottom: 8px;
  }
  
  .policy-container a {
    color: #ff4724;
    text-decoration: none;
  }
  </style>
  