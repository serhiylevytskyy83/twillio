const twilio = require('twilio')

function createInSMS(req, res) {


    const twiml = new MessagingResponse();

    twiml.message('MESSAGE SUCCESSFULLY SENT');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

module.exports = createInSMS;