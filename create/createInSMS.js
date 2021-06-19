const twilio = require('twilio')

function createInSMS(req, res) {

    const from = req.body.from;
    const text = req.body.body;
    res.send(`
<Response>
<Message>
Hello$ {from} you said ${text}
</Message>>
</Response>>
`
    )
    // const twiml = new MessagingResponse();
    //
    // twiml.message('MESSAGE SUCCESSFULLY SENT');
    //
    // res.writeHead(200, { 'Content-Type': 'text/xml' });
    // res.end(twiml.toString());
}

module.exports = createInSMS;