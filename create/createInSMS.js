const twilio = require('twilio')
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

function createInSMS(req, res) {

    const twiml = new MessagingResponse();


    twiml.message('OHO!!!!');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
    console.log(twiml.toString());
}

module.exports = createInSMS;