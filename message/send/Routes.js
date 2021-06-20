const Router = require('express');
const sendSMS = require('./sendSMS')

const router = Router();

router.post('/out', sendSMS);



module.exports = router;