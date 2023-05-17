
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // 跨域请求代理
    proxy: {
      '/api': {
        // target: 'http://localhost:3000', // 本地后端地址
        target: 'http://101.132.181.9:3000', // 线上后端地址
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})



