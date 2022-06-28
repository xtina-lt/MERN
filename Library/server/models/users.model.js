const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    first : String,
    last : String,
    email : String,
    password : String,
    createdAt : Date,
    updatedAt  : Date
})

module.exports = mongoose.model('User', Schema)