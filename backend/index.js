var http=require('http');
var express=require('express');

var bodyParser= require('body-parser');
var mongoose = require('mongoose') ;
var app=express();
var appRoutes=require('./routes/appRoute');
var cors=require('cors');

var port=process.env.port || 3000;

mongoose.connect('mongodb://aquafarm20:aquafarm20@ds221416.mlab.com:21416/aquablue');
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoutes);

// app is request handler



http.createServer(app).listen(port);

console.log("backend  running on port ", port);