
module.exports = {
  /* 跨域配置 */
  allowOrigin: async (ctx, next) => {
    let requestHeader = ctx.request.header || ''
    ctx.set("Access-Control-Allow-Origin", requestHeader.origin)
    ctx.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    ctx.set("Access-Control-Allow-Credentials", true)
    ctx.set(
      'Access-Control-Allow-Headers',
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    )
    if (ctx.method === 'OPTIONS') {
      return (ctx.body = {})
    }
    return await next()
  }
}
