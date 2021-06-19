const smsRouter = require('./create/Routes');
const homeRouter = require('./home/Routers')

function routes(app) {
    app.use('/', homeRouter)
    app.use('/create', smsRouter);


}

module.exports = routes;