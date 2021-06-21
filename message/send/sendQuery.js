const SMS = require('./Model')

function sendQuery(from, to, body, direction) {

    const sms = new SMS({
        from: from,
        to: to,
        body: body,
        direction: direction,
    });
    return sms
        .save()


}

module.exports = sendQuery;