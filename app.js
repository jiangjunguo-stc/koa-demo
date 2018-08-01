const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
// const session = require('koa-generic-session');

// const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
// const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();

//接口
const pcAdminRouter = require('./routes/pcAdmin');

app.use(convert(json()));
app.use(convert(bodyparser));
app.use(convert(logger()));

// 头部添加响应时间
app.use(async (ctx, next) => {
  ctx.session = null;
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', ms + 'ms');
  ctx.set('Cache-Control', 'no-cache');
});

app.use(pcAdminRouter.routes(), pcAdminRouter.allowedMethods())

module.exports = app