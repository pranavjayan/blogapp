const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userName: String,
    userEmail: String,
    userPassword : String,
    userPhone : Number, 
    userAddress : String
})
const userData = mongoose.model('userdetail', userSchema);
module.exports = userData;