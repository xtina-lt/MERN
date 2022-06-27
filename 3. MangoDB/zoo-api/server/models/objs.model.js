const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        _id : Number,
        name: String,
        species: String,
        age : Number,
        interests : []
    }
);

console.log("Schema" + Schema);

// EACH DOCUMENT IS A NEW OBJECT
const Objs = mongoose.model("Objs", Schema);

module.exports = Objs;