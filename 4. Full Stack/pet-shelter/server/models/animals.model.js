const mongoose = require('mongoose')
const arrVal = require('mongoose-array-validator');

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "🦴Tell me my new friend's name..."],
        minlength: [3, 'More please🦴!']
    },
    species : {
        type: String,
        required: [true, '🦴What am I?'],
        minlength: [3, 'More please🦴!']
    },
    skills: {
        type: [String],
        required: [true, '🦴Tell me something cool!'],
        uniqueItems: true,
        minItems: {value: 3, message: 'Tell me more than 3🦴'}
    },
    description: {
        type: String,
        required: [true, '🦴Talk to me!'],
        minlength: [3, 'More please🦴!']
    },
    createdAt : Date,
    updatedAt : Date
},{timestamps: true})

Schema.plugin(arrVal);
module.exports = mongoose.model('Animal', Schema)
