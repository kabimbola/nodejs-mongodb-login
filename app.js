require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();


app.unsubscribe(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

//start server
app.listen(process.env.PORT, 
    () => console.log(`Server started at port : ${process.env.PORT}`));
