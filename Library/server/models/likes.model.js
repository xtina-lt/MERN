const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    desc: String,
    url : String,
    users: []
})

module.exports = mongoose.model('Likes', Schema)