const port = 8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

require('./config/mongoose')
require('./routes/people.routes')(app)

app.listen( port, ()=>console.log(`Party on port : ${port}`) )