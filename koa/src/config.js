
/* 全局配置信息 */
const path = require('path');

module.exports = {
  Port: 5000, // 启动端口
  staticDir: path.resolve(__dirname, '../public'), // 静态资源路径
  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    // 连接 storeDB 数据库
    database: 'storeDB'
  }
}