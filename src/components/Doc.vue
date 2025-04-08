<template>
  <div class="container">
    <div class="topnav">
      <div class="text-logo">DeepSeek</div>
      <button class="bar">1</button>
    </div>
    <div class="content">
      <div class="body">
        <div class="text">我是 DeepSeek，很高兴见到你！</div>
        <p>我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</p>
      </div>
      <div class="dd">
        <div class="chat-imput">
          <div class="chat-input-1">给 DeepSeek 发送消息</div>
          <span class="ad">深度思考(R1)</span>
          <div class="ds">联网搜索</div>
          <button class="send">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
}

.topnav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100vh;
  background-color: rgb(33, 35, 39);
  padding: 0 20px;
  margin-right: auto;
  position: relative;
  border-radius: 8px 0 0 8px;
}

.text-logo {
  color: rgb(171, 178, 189);
  font-size: 26px;
  position: absolute;
  top: 20px;
}

.bar {
  background-color: rgb(33, 35, 39);
  color: rgb(171, 178, 189);
  font-size: 26px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.content {
  background: rgb(41, 42, 45);
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
  margin-left: 0;
  overflow: hidden;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  color: white;
}

p {
  font-size: 16px;
}

.text {
  font-size: 26px;
}

.chat-imput {
  background: rgb(64, 64, 69);
  z-index: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  display: flex;
  overflow: hidden;
  border-radius: 32px;
}

chat-input-1 {
  color: rgb(138, 138, 149);
}
.send{
  
}
</style>