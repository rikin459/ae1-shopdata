require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path =require('path'); 
const process = require("process");
const mongoose = require("mongoose");


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
app.use('/background',express.static(path.resolve(__dirname,"main/background")))
app.use('/javascript',express.static(path.resolve(__dirname,"main/javascript")))


app.get("/", (req, res) => {
  res.render("index")
});

app.get("/addlogs", (req, res) => {
  res.render('addlogs', { errors: {} })
});

app.get("/updatelogs", (req, res) => {
  res.render('updatelogs', { errors: {} })
});


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {

    console.error(err);

    console.log(

        "MongoDB connection error. Please make sure MongoDB is running.",

        chalk.red("✗")

    );

    process.exit();

});

app.listen(PORT,()=>{console.log('Server is running on http://localhost:PORT')});
