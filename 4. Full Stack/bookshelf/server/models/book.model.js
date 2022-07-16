const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    title : String,
    author : String,
    pages : Number,
    genre : String,
    read : Boolean,
    url : String,
    createdAt : Date,
    updateAt : Date
},{timestamps: true})

module.exports = mongoose.model('Book', Schema)
