<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background: #f0f2f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #ffffff;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.logo {
  height: 32px;
  margin-right: 12px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.message {
  display: flex;
  margin-bottom: 20px;
  gap: 12px;
}

.user-message {
  flex-direction: row-reverse;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #e5e7eb;
}

.content {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 12px;
  line-height: 1.5;
}

.user .content {
  background: #3b82f6;
  color: white;
  border-radius: 12px 12px 4px 12px;
}

.assistant .content {
  background: white;
  color: #1a1a1a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px 12px 12px 4px;
}

.input-container {
  background: white;
  padding: 20px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
}

.input-wrapper {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

textarea {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 48px 12px 16px;
  resize: none;
  min-height: 48px;
  max-height: 200px;
  font-size: 16px;
}

button {
  position: absolute;
  right: 12px;
  bottom: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.9;
}
</style>

<template>
  <header class="header">
    <img src="https://www.deepseek.com/favicon.ico" alt="logo" class="logo">
    <h1 class="title">DeepSeek Chat</h1>
  </header>

  <div class="chat-container" id="chatContainer">
    <div class="message assistant">
      <div class="avatar"></div>
      <div class="content">
        您好！我是由深度求索公司开发的智能助手DeepSeek-R1。有关模型和产品的详细内容请参考官方文档。
      </div>
    </div>
  </div>

  <div class="input-container">
    <div class="input-wrapper">
      <textarea id="messageInput" placeholder="输入消息..." rows="1" autofocus></textarea>
      <button onclick="sendMessage()">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() { // 新增生命周期钩子
    const messageInput = document.getElementById('messageInput');

    messageInput.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });

    // 回车发送消息的逻辑也移动到此处
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
  },
  methods: { // 将函数改为组件方法
    addMessage(content, isUser) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;

      const avatar = document.createElement('div');
      avatar.className = 'avatar';

      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';
      contentDiv.textContent = content;

      messageDiv.append(avatar, contentDiv);
      chatContainer.appendChild(messageDiv);

      if (isUser) {
        messageInput.value = '';
        messageInput.style.height = 'auto';
      }

      chatContainer.scrollTop = chatContainer.scrollHeight;
    },
    sendMessage() {
      const message = messageInput.value.trim();
      if (!message) return;

      addMessage(message, true);
      // 这里可以添加获取AI回复的逻辑
      setTimeout(() => {
        addMessage('这是模拟的回复内容', false);
      }, 1000);
    }
  }
}
</script>