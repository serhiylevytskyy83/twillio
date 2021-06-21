const mongoose=require('mongoose')
const Schema= mongoose.Schema

const smsSendSchema = new Schema({

    from: {type: String, required: true},
    to: {type: String, required: true},
    body: {type: String, required: true},
    direction: {type: String, required: true,},

});


module.exports = mongoose.model('SMS', smsSendSchema);


