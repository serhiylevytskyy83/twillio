const Router = require('express');
const createOutSMS = require('./createOutSMS')
const createInSMS = require('./createInSMS')
const router = Router();
router.post('/out', createOutSMS);
router.post('/in',createInSMS)


module.exports = router;