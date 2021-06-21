const mongoose = require('mongoose');
const outSMS = require('./Model')
const Schema = mongoose.Schema;

const sendSMS = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    bodyText: {type: String, required: true},
    direction: {type: String, required: true,},

});
sendSMS.index({email: 1}, {unique: true}); // unique index to not duplicate email or set option in MongoDB

module.exports = mongoose.model('SendSMS', sendSMS);


