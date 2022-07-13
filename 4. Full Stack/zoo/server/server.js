const express = require('express');
const app = express();

const cors = require('cors')
app.use( cors() )

app.use( express.json() )
app.use( express.urlencoded({extended:true}) )

require('./config/mongoose')
require('./routes/aninmals.route')(app)

const port = 8000;
app.listen(port, () => console.log(`Party on port: ${port}`) );
