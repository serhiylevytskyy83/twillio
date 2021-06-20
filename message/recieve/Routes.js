const Router = require('express');
const receiveSMS = require('./recieveSMS')

const router = Router();

router.post('/receive',receiveSMS)


module.exports = router;