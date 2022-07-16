// js framework - interface to Node Server
const express = require('express');
const app = express();
app.use( express.json() )
app.use( express.urlencoded({extended:true}) )

// cors cross-origin requests
const cors = require('cors')
app.use( cors() )

// connect to mongooese and routes
require('./config/mongoose')
require('./routes/aninmals.route')(app)

// app listen to port
const port = 8000;
app.listen(port, () => console.log(`Party on port: ${port}`) );
