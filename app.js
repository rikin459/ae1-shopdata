require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path =require('path'); 

const app = express()

const { PORT, MONGODB_URI } = process.env;

// log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load design
app.use('/css',express.static(path.resolve(__dirname,"main/css")))
app.use('/img',express.static(path.resolve(__dirname,"main/img")))
app.use('/javascript',express.static(path.resolve(__dirname,"main/javascript")))

app.use('/',require('./server/routes/'))

app.listen(PORT,()=>{console.log('Server is running on http://localhost:PORT')});