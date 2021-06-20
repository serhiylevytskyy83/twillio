const twilio = require('twilio')
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

function recieveSMS(req, res) {

    const twiml = new MessagingResponse();
    let from = req.body.From;

    twiml.message(`OHO!!!! ${from}`);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
    console.log(twiml.toString());
}

module.exports = recieveSMS;