const express = require("express");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.static("views"));

app.get("/",(req,res)=>{
    res.render('index');
});


app.listen(1708,()=>{
    console.log("Server started");
});
