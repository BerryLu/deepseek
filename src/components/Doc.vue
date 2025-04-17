<template>
  <div class="container">
    <div class="topnav">
      <div class="topnav-head">
        <div class="logo">DeepSeek</div>
        <div class="btn-1">收起</div>
      </div>
      <div class="topnav-btn-1">开启新对话</div>
      <div class="topnav-content">
      </div>
      <div class="topnav-footer">
        <div class="topnav-footer-btn-1">下载 App</div>
        <div class="topnav-footer-btn-2">个人信息</div>
      </div>
    </div>
    <div class="content">
      <div class="text">
        <div class="text-1">我是 DeepSeek，很高兴见到你！</div>
        <div class="text-2">我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</div>
      </div>
      <div class="chat-input">
        <div class="chat-input-text">给 DeepSeek 发送消息</div>
        <div class="chat-input-btn">
          <div class="chat-input-btn-1">深度思考(R1)</div>
          <div class="chat-input-btn-2">联网搜索</div>
          <button class="send">发送</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  margin: 0;
  padding: 0;
}

.topnav {
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(33, 35, 39);
  border-radius: 8px 0 0 8px;
}

.topnav-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.logo {
  color: rgb(171, 178, 189);
  font-size: 24px;
}

.btn-1 {
  background-color: rgb(33, 35, 39);
  color: rgb(171, 178, 189);
  border: 1px solid rgb(171, 178, 189);
  border-radius: 4px;
}

.topnav-btn-1 {
  color: white;
  background-color: rgb(77, 107, 254);
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
  padding: 0 10px;
  margin: 0 10px 10px 10px;
  width: 110px;
  height: 40px;
  align-content: center;
}

.topnav-content {
  flex: 1;
  height: 500px;
}

.topnav-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px;
}

.topnav-footer-btn-1,
.topnav-footer-btn-2 {
  text-align: center;
  padding: 10px 0 10px 0;
  border: 1px solid lightblue;
  border-radius: 12px;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(41, 42, 45);
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
  margin-left: 0;
  overflow: hidden;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.text-1 {
  font-size: 28px;
  font-weight: 400;
}

.text-2 {
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
}

.chat-input {
  background: rgb(64, 64, 69);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  overflow: hidden;
  border-radius: 26px;
  width: 520px;
}

.chat-input-text {
  color: rgb(153, 154, 165);
  padding: 0 0 0 10px;
}

.chat-input-btn {
  display: flex;
  justify-content: row;
  padding: 20px 0; 
}
.chat-input-btn-1 {
  background: rgb(69, 81, 143);
  color: rgb(76, 174, 255);
  border: 1px solid rgb(76, 174, 255);
  border-radius: 12px;
  padding:2px;
  margin:  10px 4px 4px 8px;
  bottom: 8px;
  order: 1;
}
.chat-input-btn-2 {
 color: white; 
 border: 1px solid white;
 border-radius: 12px;
 padding:2px;
 margin: 10px 4px 4px 8px;
 order: 1;
}

.send {
  background: rgb(77, 107, 254);
  color: white;
  border: 1px solid rgb(77, 107, 254);
  border-radius: 19px;
  order: 1;
  margin-left: auto;
}
</style>