const port = 8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

require('./routes/users.routes')(app)
require('./config/mongoose')

app.listen( port, ()=>console.log(`Party on port: ${port}`) )