const twilio = require('twilio')
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

function createInSMS(context, event, callback) {


        let twiml = new Twilio.twiml.MessagingResponse();
        twiml.message(`${event.From}: ${event.Body}`, {
            to: '+15197228119'
        });
        callback(null, twiml);

    // const twiml = new MessagingResponse();
    // console.log(twiml)
    // twiml.message('OHO!!!!');
    //
    // res.writeHead(200, { 'Content-Type': 'text/xml' });
    // res.end(twiml.toString());
}

module.exports = createInSMS;