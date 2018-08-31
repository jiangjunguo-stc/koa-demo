const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
// const session = require('koa-generic-session');
const session = require('koa-session');
// 跨域配置
const { allowOrigin } = require('./utils/access')
const convert = require('koa-convert')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')()
// const storeInstance = require('./utils/redisUtils');
//接口
const pcAdminRouter = require('./routes/pcAdmin')

app.use(convert(json()));
app.use(convert(bodyparser));
app.use(convert(logger()));
app.use(allowOrigin)
// 头部添加响应时间
app.use(async (ctx, next) => {
  // ctx.session = null;
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', ms + 'ms');
  ctx.set('Cache-Control', 'no-cache');
});

// session
app.keys = ['admin'];
app.use(session({
  key: 'admin',
  maxAge: 24 * 60 * 60 * 1000, 
  rolling: true,  // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
}, app));

app.use(pcAdminRouter.routes(), pcAdminRouter.allowedMethods())

module.exports = app