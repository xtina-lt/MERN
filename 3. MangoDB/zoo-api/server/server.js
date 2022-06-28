const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const Routes = require("./routes/animals.route");
Routes(app);

app.listen(port, () => console.log(`Express running on port ${port}`));

