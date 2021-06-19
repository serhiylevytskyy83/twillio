const twilio = require('twilio')
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

function createInSMS(req, res) {

    const twiml = new MessagingResponse();

    twiml.redirect('https://ukr.net');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

module.exports = createInSMS;