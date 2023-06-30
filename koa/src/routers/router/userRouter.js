/* 用户模块路由 */
const Router = require('koa-router');
// 导入控制层
const userController = require('../../controllers/userController');

let userRouter = new Router();

userRouter
  .post('/users/login', userController.Login)
  .post('/users/findUserName', userController.FindUserName)
  .post('/users/register', userController.Register)

module.exports = userRouter;