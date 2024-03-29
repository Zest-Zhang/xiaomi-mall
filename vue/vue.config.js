const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // 跨域请求代理
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 本地后端地址
        // target: 'http://101.132.181.9:3000/', // 线上后端地址
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // 解决 markdown 组件 bug 的配置
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'text-loader'
        }
      ]
    }
  },
})



