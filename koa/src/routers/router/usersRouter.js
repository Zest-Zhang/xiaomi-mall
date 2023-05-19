/* 用户模块路由 */
const Router = require('koa-router');
// 导入控制层
const usersController = require('../../controllers/usersController');

let usersRouter = new Router();

usersRouter
  .post('/users/login', usersController.Login)
  .post('/users/findUserName', usersController.FindUserName)
  .post('/users/register', usersController.Register)

module.exports = usersRouter;