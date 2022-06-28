const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Got a db connect!'))
    .catch(err=>console.log('Beeeppp! wrong db connect...'))