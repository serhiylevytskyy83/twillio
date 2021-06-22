const SMSin = require('./Model')

function receiveQuery(from, to, body) {

    const SmsIn = new SMSin({
        from: from,
        to: to,
        body: body,
        direction: 'in',
    });
    return SmsIn
        .save()


}

module.exports = receiveQuery;