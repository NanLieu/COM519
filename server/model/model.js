const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : String,
    phone : String,
    department : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;