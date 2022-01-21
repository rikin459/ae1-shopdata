require("dotenv").config();
const express = require('express');
const expressSession = require("express-session")
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path =require('path'); 
const process = require("process");
const mongoose = require("mongoose");

const log=require('./server/models/log')

const logcontroller=require('./server/controller/logs')

const app = express()

const { PORT, MONGODB_URI } = process.env;


// log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(expressSession({secret: "foo barr", cookie: {expires: new Date(253403000000)}}));
//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load design
app.use('/css',express.static(path.resolve(__dirname,"main/css")))
app.use('/img',express.static(path.resolve(__dirname,"main/img")))
app.use('/javascript',express.static(path.resolve(__dirname,"main/javascript")))


app.get("/index",logcontroller.list);
app.get("/index/delete/:id",logcontroller.delete);

app.get("/updatelogs/:id",logcontroller.edit);
app.post("/updatelogs/:id",logcontroller.update);

app.get("/addlogs", (req, res) => {
  res.render("addlogs");
});
app.post("/addlogs", logcontroller.create);





mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {

    console.error(err);

    console.log(

        "MongoDB connection error. Please make sure MongoDB is running.",

        chalk.red("✗")

    );

    process.exit();

});

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
