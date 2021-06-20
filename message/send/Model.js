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

export function save(smsOut, direction){
          const sms ={
              ...smsOut,
              direction
          }
    sms
        .save()
        .then((res) => {
            res.status(200).json('sms saved');
        })
        .catch((err,res) => {
            console.log(err);
            res.status(400).json('sms not saved');
        })
        .finally(() => {
            console.log('END');
        });

}
