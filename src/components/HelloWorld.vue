<template>
  <p>🎉 DeepSeek-V3 模型更新，各项能力全面进阶，在网页端、APP 和 API 全面上线，点击查看详情。</p>
  <h1>DeepSeek</h1>
  <h2>探索未至之境</h2>
  <div class="container">  <!-- 新增容器包裹两个区块 -->
    <div class="text-xl">
      <h3>开始对话</h3>
      <p>与DeepSeek-V3 和 R1 免费对话体验全新旗舰模型</p>
    </div>
    <div class="text-xl">
      <h3>获取手机 App</h3>
      <p>DeepSeek 官方推出的免费 AI 助手搜索写作阅读解题翻译工具</p>
    </div>
  </div>
</template>

<style>
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  
  /* 新增容器样式 */
  .container {
    display: flex;
    gap: 30px;  /* 区块间距 */
    justify-content: space-between;
  }
  
  .text-xl {
    flex: 1;  /* 等宽分布 */
    max-width: 400px;  /* 最大宽度限制 */
    padding: 1rem;
    border: 1px solid #e5e7eb;  /* 可选边框 */
    border-radius: 0.5rem;
  }
</style>