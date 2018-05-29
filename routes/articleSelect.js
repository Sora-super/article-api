var express = require('express');
var app = express()
var router = express.Router();
// 导入数据库模块
var mysql = require('mysql')
var dbConfig = require('../db/DBConfig.js')
var articleSQL = require('../db/articleql.js')
// 创建一个mysql的连接池
const pool = mysql.createPool(dbConfig.mysql)

// 响应一个JSON数据
var responseJSON = function (res, ret) {
  if(typeof ret === 'undefined') { 
       res.json({     code:'-200',     msg: '操作失败'   
     }); 
 } else { 
   res.json(ret); 
}};
// 添加用户
router.get('/selectArticle', function(req, res, next){
  // 从连接池获取连接 
  pool.getConnection(function(err, connection) { 
  // 获取前台页面传过来的参数  
  // var param = req.query || req.params;   
  // 建立连接 增加一个用户信息 
  connection.query(articleSQL.queryAll,function(err, result) {
      if(result) {
            result = {   
                    code: 200,   
                    msg: result
            };  
      }     
        
    // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);   

    // 释放连接  
    connection.release();  

      });
  });
});



module.exports = router;