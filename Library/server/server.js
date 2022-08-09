require('dotenv').config()
// express: js framework - interface to Node Server
const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT;


app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())

// cors cross-origin requests
// app.use( cors() )
// session cors
// connect to mongooese and routes
require('./config/mongoose')
require('./routes/users.routes')(app)
require('./routes/likes.routes')(app)

// middleware for cookies

// read enviroment variables
// app listen to port
app.listen(PORT, () => console.log(`Party on port: ${PORT}`) );


// LOGIN REG INSTALL
// npm i bcrypt dotenv cookie-parser jsonwebtoken