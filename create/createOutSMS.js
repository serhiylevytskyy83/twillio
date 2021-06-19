require('dotenv').config();


function createOutSMS(req, res) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            to: req.body.to,
            from: req.body.from,
            body: req.body.body,
        })
        .then((message) => {
        res.status(200).json(message.direction);
    })
        .catch(error => console.error(error));
}
module.exports = createOutSMS;