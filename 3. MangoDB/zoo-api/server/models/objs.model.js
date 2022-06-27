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
/* const Schema = new mongoose.Schema(
    {
        _id : {
            type: Number,
            required: [true, "id required"],
            min[1, 'Must be larger than 1'],
            max[1084723, 'Must be smaller than 1084723']
        }
        name : {
            type: String,
            required: [true, "entry required"],
            minlength[2, 'Must be larger than 2'],
            max[20, 'Must be smaller than 20']
        }
        
    }
)
*
*/

console.log("Schema" + Schema);

// EACH DOCUMENT IS A NEW OBJECT
const Objs = mongoose.model("Objs", Schema);

module.exports = Objs;