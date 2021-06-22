const twilio = require('twilio')
const receiveQuery = require("./receiveQuery")
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

function recieveSMS(req, res) {

    const twiml = new MessagingResponse();

    let from = req.body.From;
    let to = req.body.To;
    let body = req.body.Body;


    receiveQuery(from,to,body);

    twiml.message(`OHO!!!! ${from}`);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
    console.log(twiml.toString());
}

module.exports = recieveSMS;