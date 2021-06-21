const Router = require('express');
const receiveSMS = require('./recieveSMS')

const router = Router();

router.post('/in',receiveSMS)


module.exports = router;