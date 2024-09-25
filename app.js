const express = require("express");
const app = express();
const path = require('node:path');
const ejs = require("ejs");
const bodyParser = require("body-parser");

const http = require("http");



app.set("views", path.join(__dirname, "views"));
//set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


const homeRoute = require("./routes/home");
app.use("/", homeRoute);

//listen to port 3000;
app.listen(3000, function() {
    console.log("server started");
  });