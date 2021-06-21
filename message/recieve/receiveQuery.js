const SMSka = require('./Model')

function receiveQuery(from, to, body) {

    const sms = new SMSka({
        from: from,
        to: to,
        body: body,
        // direction: direction,
    });
    return sms
        .save()


}

module.exports = receiveQuery;