const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    first : String,
    last: String
})

module.exports = mongoose.model('Person', Schema)