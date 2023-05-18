const Koa = require('koa');

let { Port } = require('./config');

let app = new Koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

// 监听服务器启动端口
app.listen(Port, () => {
    console.log(`服务器启动在${ Port }端口`);
});