// express: js framework - interface to Node Server
const express = require('express');
const app = express();
app.use( express.json() )
app.use( express.urlencoded({extended:true}) )

// cors cross-origin requests
const cors = require('cors')
app.use( cors() )

// connect to mongooese and routes
require('./config/mongoose')
require('./routes/users.routes')(app)

// read enviroment variables
require('dotenv').config()

// use cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// app listen to port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Party on port: ${PORT}`) );

