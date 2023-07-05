
/* 入口文件 */
const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaBody = require('koa-body');
const Session = require('koa-session');

let { Port, staticDir } = require('./config');

let app = new Koa();

// 避免乱码的中间件
app.use(async (ctx, next) => {
  // 设置 Content-Type 和字符集编码
  ctx.set('Content-Type', 'text/plain; charset=utf-8');

  await next();
});

// 异常处理中间件
const error = require('./middleware/error');
app.use(error);

// 为静态资源请求重写url
const rewriteUrl = require('./middleware/rewriteUrl');
app.use(rewriteUrl);
// 使用koa-static处理静态资源
app.use(KoaStatic(staticDir));

// session
const CONFIG = require('./middleware/session');
app.keys = ['session app keys'];
app.use(Session(CONFIG, app));

// 判断是否登录
const isLogin = require('./middleware/isLogin');
app.use(isLogin);

app.use(async (ctx, next) => {
  ctx.state.user = ctx.session.user;
  await next();
});

// 处理请求体数据
const koaBodyConfig = require('./middleware/koaBodyConfig');
app.use(KoaBody(koaBodyConfig));

// 使用路由中间件
const Routers = require('./routers');
app.use(Routers.routes()).use(Routers.allowedMethods());

// 监听服务器启动端口
app.listen(Port, () => {
  console.log(`服务器启动在${ Port }端口`);
});




