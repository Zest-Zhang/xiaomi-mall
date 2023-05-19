/* 模块子路由汇总(入口文件) */
const Router = require('koa-router');

let Routers = new Router();

const usersRouter = require('./router/usersRouter');

Routers.use(usersRouter.routes());

module.exports = Routers;