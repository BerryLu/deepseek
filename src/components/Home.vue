<template>
  <div class="first-child">
    <div class="background-layer" />
    <div class="header">
      <div class="logo">DeepSeek</div>
      <div class="nav-items">
        <a href="#" style="text-decoration:underline;font-weight: 700;">API 开放平台 ↗</a>
        <a href="#">English</a>
      </div>
    </div>
    <div class="body">
      <div class="banner">
        <p style="color: rgb(148, 163, 184);">🎉 DeepSeek-V3 模型更新，各项能力全面进阶，在网页端、APP 和 API 全面上线，点击查看详情。</p>
        <h1>DeepSeek</h1>
        <h2>探索未知的世界</h2>
      </div>
      <div class="BannerCard">
        <router-link to="/doc">
          <div class="text-xl">
            <div class="font-bold">开始对话</div>
            <div class="text-slate-500">与DeepSeek-V3 和 R1 免费对话<br>体验全新旗舰模型</div>
          </div>
        </router-link>
        <router-link to="/qr">
          <div class="text-xl">
            <div class="font-bold">获取手机 App</div>
            <div class="text-slate-500">DeepSeek 官方推出的免费 AI 助手 <br>搜索写作阅读解题翻译工具</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="text-slate-700">
        <div class="text-1">DeepSeek</div>
        <a href="" class="text-1-1">2ogo</a>
        <a href="" class="text-1-1">© 2025 杭州深度求索人工智能基础技术研究有限公司 版权所有</a>
        <a href="" class="text-1-1">浙ICP备2023025841号</a>
        <a href="" class="text-1-1">浙B2-20250178</a>
        <a href="" class="text-1-1">浙公网安备33010502011812号</a>
      </div>
      <div class="text-slate-700">
        <div class="text-1">研究</div>
        <a href="#" class="text-1-2">DeepSeek R1</a>
        <a href="#" class="text-1-2">DeepSeek V3</a>
        <a href="#" class="text-1-2">DeepSeek Coder V2</a>
        <a href="#" class="text-1-2">DeepSeek VL</a>
        <a href="#" class="text-1-2">DeepSeek V2</a>
        <a href="#" class="text-1-2">DeepSeek Coder</a>
        <a href="#" class="text-1-2">DeepSeek Math</a>
        <a href="#" class="text-1-2">DeepSeek LLM</a>
      </div>
      <div class="text-slate-700">
        <div class="text-1">产品</div>
        <a href="#" class="text-1-2">DeepSeek App</a>
        <a href="#" class="text-1-2">DeepSeek 网页版</a>
        <a href="#" class="text-1-2">开放平台</a>
        <a href="#" class="text-1-2">API 价格</a>
        <a href="#" class="text-1-2">服务状态</a>
      </div>
      <div class="text-slate-700">
        <div class="text-1">法务&安全</div>
        <a href="#" class="text-1-2">隐私政策</a>
        <a href="#" class="text-1-2">用户协议</a>
        <a href="#" class="text-1-2">反馈安全漏洞</a>
      </div>
      <div class="text-slate-700">
        <div class="text-1">加入我们</div>
        <a href="#" class="text-1-2">岗位详情</a>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  background-color: transparent;
  color: inherit;
}

h1 {
  color: rgb(50, 137, 255);
  width: 100%;
  font-size: 60px;
  padding: 20px 0 20px 0;
  margin: 0;
}

h2 {
  color: rgb(71, 85, 105);
  width: 100%;
  font-size: 30px;
  padding: 0 0 60px 0;
  margin: 0;
}

.background-layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('/src/assets/banner-background.webp') top/contain no-repeat;
  z-index: 0;
}

.first-child {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 0;
  background: transparent;
  position: relative;
  z-index: 1;
}

.logo {
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  color: rgb(50, 137, 255);
  font-weight: bold;
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px 20px;
}

.body {
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  z-index: 1;
}

.banner {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.BannerCard {
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 0;
  box-sizing: border-box;
}

.text-xl {
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 81px;
  padding: 24px 32px 28px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: white;
}

.font-bold {
  color: rgb(77, 107, 254);
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 8px 0;
}

.text-slate-500 {
  color: rgb(115, 130, 151);
  font-size: 16px;
  padding: 0 0 16px 0;
}

.footer {
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
  background: white;
  position: relative;
  z-index: 1;
}

.text-slate-700 {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.text-1 {
  font-weight: 700
}

.text-1-1 {
  font-size: 16px;
  color: rgb(148, 163, 184);
}

.tetx-1-2 {
  font-size: 16px;
  color: rgb(71, 85, 105);
}

@media (max-width: 768px) {
  .BannerCard {
    flex-direction: column;
    padding: 0 20px;
  }

  .text-xl {
    width: 100%;
    max-width: 400px;
  }

  .footer {
    flex-direction: column;
    padding: 20px 20px;
  }
}
</style>