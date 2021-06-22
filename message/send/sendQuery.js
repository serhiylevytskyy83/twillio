const SMSout = require('./Model')

function sendQuery(from, to, body) {

    const SmsOut = new SMSout({
        from: from,
        to: to,
        body: body,
        direction: 'out',
    });
    return SmsOut
        .save()


}

module.exports = sendQuery;