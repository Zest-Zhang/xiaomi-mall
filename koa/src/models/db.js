
/* 数据库连接 */
var mysql = require('mysql');
const { dbConfig } = require('../config.js');
var pool = mysql.createPool(dbConfig);

var db = {};

// 这是一个基于连接池的数据库查询函数，
// 目的：为了对连接池进行数据库查询，可以避免频繁创建、销毁与数据库的连接
db.query = function (sql, params) {
  return new Promise((resolve, reject) => {
    // 取出链接(即 从连接池中获取一个数据库连接对象)
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
        return;
      }
      // 调用连接对象的 query 方法，
      // 执行 SQL 查询，sql 为查询语句，params 为查询参数，callback 为回调函数
      connection.query(sql, params, function (error, results, fields) {
        console.log(`${ sql }=>${ params }`);
        // 释放连接
        connection.release();
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
}
// 导出对象
module.exports = db;
