// todo API
const fetch = require('../utils/httpUtils')
const API = require('../config/api')
const comUtils = require('../utils/comUtils')

module.exports = {
  // test
  test: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.get(API.getTestApi, clientParams, ctx)
    ctx.body = remoteData
  }
}