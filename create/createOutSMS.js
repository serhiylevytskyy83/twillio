require('dotenv').config();


function createOutSMS(req, res) {
    const accountSid = 'AC26d060868e8b8ee685b1ed0ee7df9bac';
    const authToken ='b1b81544c0294d8f88fe3b47db494c41';

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