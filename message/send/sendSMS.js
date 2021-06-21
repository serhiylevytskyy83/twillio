const outSMS = require('./Model')
const save = require("./sendQuery");
require('dotenv').config();


function sendSMS(req, res) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = require('twilio')(accountSid, authToken);

    const smsOut = new outSMS({
        from: req.body.from,
        to: req.body.to,
        bodyText: req.body.bodyText,
    });


    client.messages
        .create({
            to: req.body.to,
            from: req.body.from,
            body: req.body.body,
        })
        .then((message) => {
            save(smsOut, message.direction)

                  res.status(200).json(message.direction);
    })
        .catch(error => console.error(error));
}
module.exports = sendSMS;