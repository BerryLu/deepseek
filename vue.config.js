const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 新增配置
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'] // 添加.ts扩展名解析
    }
  },
  chainWebpack: config => {
    config.entry('app')
      .clear()
      .add('./src/main.ts') // 显式指定TypeScript入口文件
  }
})