require('dotenv').config();


function createOutSMS(req, res) {
    const accountSid = 'AC26d060868e8b8ee685b1ed0ee7df9bac';
    const authToken ='3dd9d710aac47d74bf4ad98d16149a7f';

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