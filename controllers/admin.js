
/**
 * APIlist 列表
 * http://2i1597b475.51mypc.cn:26180/swagger-ui.html#/
 * 
 */
const fetch = require('../utils/httpUtils')
const API = require('../config/api')
const comUtils = require('../utils/comUtils')

module.exports = {
  // 获取验证码
  getCheckCode: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.getCheckCode, clientParams, ctx)
    ctx.body = remoteData
  },
  // 用户登录
  userLogin: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.userLogin, clientParams, ctx)
    ctx.body = remoteData
  },
  // 用户登出
  userSignOut: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.userSignOut, clientParams, ctx)
    ctx.body = remoteData
  },
  // 修改密码
  modifyPassword: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.modifyPassword, clientParams, ctx)
    ctx.body = remoteData
  },
  // 重置密码
  resetPassword: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.resetPassword, clientParams, ctx)
    ctx.body = remoteData
  },
  // 获取认证记录列表 + 验证是否登录
  getRecordLists: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.getRecordLists, clientParams, ctx)
    ctx.body = remoteData
  },
  // 认证记录报表导出
  exportRecord: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.exportRecord, clientParams, ctx)
    ctx.body = remoteData
  },
  // 设备激活
  activateMachine: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.activateMachine, clientParams, ctx)
    ctx.body = remoteData
  },
  // 设备变更
  changeMachine: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.changeMachine, clientParams, ctx)
    ctx.body = remoteData
  },
  // 获取设备列表
  getListMachines: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.getListMachines, clientParams, ctx)
    ctx.body = remoteData
  },
  // 设备场所列表
  getListLocations: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.getListLocations, clientParams, ctx)
    ctx.body = remoteData
  },
  // 新增管理员
  addManager: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.addManager, clientParams, ctx)
    ctx.body = remoteData
  },
  // 管理员分配场所
  allotManager: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.allotManager, clientParams, ctx)
    ctx.body = remoteData
  },
  // 删除管理员
  deleteManager: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.deleteManager, clientParams, ctx)
    ctx.body = remoteData
  },
  // 获取数据统计
  getCountRecords: async (ctx, next) => {
    let clientParams = comUtils.getClientParams(ctx)
    let remoteData = await fetch.post(API.getCountRecords, clientParams, ctx)
    ctx.body = remoteData
  }
}