function save(smsOut, direction){
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
module.exports = save;