const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    _id : String,
    name : String,
    species : String,
    age : Number,
    interests: Array,
    createdAt : Date,
    updateAt : Date
},{timestamps: true})

module.exports = mongoose.model('Animal', Schema)