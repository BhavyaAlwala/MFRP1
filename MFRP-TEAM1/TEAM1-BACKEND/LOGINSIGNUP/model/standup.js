const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    FullName:{type: String},
    UserName:{type :String},
    EmailAdress:{type :String},
    Password:{type :String},
    ConfirmPassword:{type :String},
})

module.exports = mongoose.model('Register', registerSchema)