let Router = require('koa-router');
let router = new Router();
let adminControl = require('../controllers/admin');

router.post('/api/getCheckCode', adminControl.getCheckCode);
router.post('/api/user/login', adminControl.userLogin);
router.post('/api/user/signOut', adminControl.userSignOut);
router.post('/api/modifyPassword', adminControl.modifyPassword);
router.post('/api/resetPassword', adminControl.resetPassword);
router.post('/api/getRecordLists', adminControl.getRecordLists);
router.post('/api/export/record', adminControl.exportRecord);
router.post('/api/activate/machine', adminControl.activateMachine);
router.post('/api/change/machine', adminControl.changeMachine);
router.post('/api/getMachineLists', adminControl.getListMachines);
router.post('/api/getLocationLists', adminControl.getListLocations);
router.post('/api/addManager', adminControl.addManager);
router.post('/api/allotManager', adminControl.allotManager);
router.post('/api/deleteManager', adminControl.deleteManager);
router.post('/api/getCountRecords', adminControl.getCountRecords);

module.exports = router;