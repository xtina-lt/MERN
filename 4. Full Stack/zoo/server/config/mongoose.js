const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/zoo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=>console.log("got a database!") )
    .catch( e=>console.log('caught an error: ' + e) )