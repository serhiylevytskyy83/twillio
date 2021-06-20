const sendRouter = require('../send/Routes');
const receiveRouter = require('../recieve/Routes')
const homeRouter = require('../../home/Routers')

function routes(app) {
    app.use('/', homeRouter)
    app.use('/send', sendRouter);
    app.use('/receive', receiveRouter);


}

module.exports = routes;