const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{type:Number},
    firstName:{type :String},
    lastName:{type :String},
    address:{type :String},
    phoneNumber:{type :String},
    location:{type:String},
})

module.exports = mongoose.model('Employee', employeeSchema)