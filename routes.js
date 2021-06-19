const createSMS = require("./create/createOutSMS");
const smsRouter = require('./create/Routes');
function routes(app) {
    app.use('/create', smsRouter);

}
module.exports = routes;