let Router = require('koa-router');
let router = new Router();
let adminControl = require('../controllers/admin');

router.get('/test', adminControl.test);

module.exports = router;