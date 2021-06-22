
const sendQuery = require("./sendQuery");
const mogoose = require('mongoose')
// const save = require("./sendQuery");
require('dotenv').config();


function sendSMS(req, res) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    console.log(req.body)
    const client = require('twilio')(accountSid, authToken);

    const from = req.body.from;
    const to = req.body.to;
    const body = req.body.body

    client.messages
        .create({
            from: req.body.from,
            to: req.body.to,
            body: req.body.body,
        })
        .then((message) => {
            sendQuery(from, to, body)
            res.status(200).json(message.direction);
        })
        .catch(error => console.error(error));
}

module.exports = sendSMS;