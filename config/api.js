const HOST = require('./host')

module.exports = {
  // 获取验证码
  getCheckCode: {
    url: HOST.adminHost + '/user/getCheckCode'
  },
  // 用户登录
  userLogin: {
    url: HOST.adminHost + '/user/login'
  },
  // 用户登出
  userSignOut: {
    url: HOST.adminHost + '/user/logout'
  },
  // 修改密码
  modifyPassword: {
    url: HOST.adminHost + '/user/modifyPassword'
  },
  // 重置密码
  resetPassword: {
    url: HOST.adminHost + '/user/resetPassword'
  },
  // 获取认证记录列表
  getRecordLists: {
    url: HOST.adminHost + '/record/lists'
  },
  // 认证记录报表导出
  exportRecord: {
    url: HOST.adminHost + '/record/exportRecord'
  },
  // 设备激活
  activateMachine: {
    url: HOST.adminHost + '/machine/activateMachine'
  },
  // 设备变更
  changeMachine: {
    url: HOST.adminHost + '/machine/changeMachine'
  },
  // 获取设备列表
  getListMachines: {
    url: HOST.adminHost + '/machine/listMachines'
  },
  // 设备场所列表
  getListLocations: {
    url: HOST.adminHost + '/location/listLocations'
  },
  // 新增管理员
  addManager: {
    url: HOST.adminHost + '/locationManager/addManager'
  },
  // 管理员分配场所
  allotManager: {
    url: HOST.adminHost + '/locationManager/allotManager'
  },
  // 删除管理员
  deleteManager: {
    url: HOST.adminHost + '/locationManager/deleteManager'
  },
  // 获取数据统计
  getCountRecords: {
    url: HOST.adminHost + '/data/countRecords'
  },
}