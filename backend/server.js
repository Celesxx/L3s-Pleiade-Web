var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  }));
  app.use(bodyParser.json({limit: "50mb"}));
const mongoose = require('mongoose');
require("dotenv").config();


    mongoose.Promise = global.Promise;
 
    // Connecting to the database
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,})
    .then(async () => {
        console.log("Successfully connected to MongoDB.");   
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
    });

    require('./app/routes/User.router.js')(app);
    // Create a Server

    var server = app.listen(process.env.PORT || 8080, function () { 
    var host = server.address().address
    var port = server.address().port    
    
    console.log("App listening at http://%s:%s", host, port) 
    })