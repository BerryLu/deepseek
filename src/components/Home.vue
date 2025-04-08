<template>
  <div class="main-container">
    <div class="background-layer"></div>
    <div class="first-child">
      <!-- 新增顶部导航栏 -->
      <nav class="header">
        <div class="logo">DeepSeek</div>
        <div class="nav-items">
          <a href="#">产品</a>
          <a href="#">解决方案</a>
          <a href="#">定价</a>
          <router-link to="/doc">开始使用</router-link>
        </div>
      </nav>
      <div class="banner">
        <p>🎉 DeepSeek-V3 模型更新，各项能力全面进阶，在网页端、APP 和 API 全面上线，点击查看详情。</p>
        <h1>DeepSeek</h1>
        <h2>探索未知的世界</h2>
      </div>
      <div class="container">
        <router-link to="/doc">
          <div class="text-xl">
            <div class="font-bold">开始对话</div>
            <div class="text-slate">与DeepSeek-V3 和 R1 免费对话体验全新旗舰模型</div>
          </div>
        </router-link>
        <router-link to="/qr">
          <div class="text-xl">
            <div class="font-bold">获取手机 App</div>
            <div class="text-slate">DeepSeek 官方推出的免费 AI 助手搜索写作阅读解题翻译工具</div>
          </div>
        </router-link>
      </div>
      <div class="footer">
        <!-- 新增页脚内容 -->
        <p>© 2024 DeepSeek. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

.background-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/src/assets/banner-background.webp') center/cover no-repeat fixed;
  z-index: -1;
  /* 确保在内容层下方 */
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  color: rgb(50, 137, 255);
  width: 320px;
  font-size: 60px;
  padding: 20px 0 20px 0;
  margin: 0;
}

h2 {
  color: rgb(71, 85, 105);
  width: 2000px;
  font-size: 30px;
  padding: 0 0 60px 0;
  margin: 0;
}

.banner {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.container {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100%;
}

.font-bold {
  color: rgb(77, 107, 254);
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 8px 0;
}

.text-xl {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 368px;
  height: 133px;
  padding: 24px 32px 28px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
}

.text-slate {
  color: rgb(115, 130, 151);
  font-size: 16px;
  padding: 0 0 16px 0;
}

.footer {
  padding: 20px;
  background: #f3f4f6;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  
}
</style>