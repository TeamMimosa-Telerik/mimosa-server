"use strict"
var data = require('./data/data.js');
// dependancies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');
var cors = require('cors');


// create app
var app = express();
var router = express.Router();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//config
app.use('/', router);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors())

app.set('port', (process.env.PORT || 5000));

// routes
router.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/page.html');
});


router.get('/algoAcademyQuestions', function (req, res) {
  res.jsonp(data.algoAcademyQuestions);
});

router.get('/kidsAcademyQuestions', function (req, res) {
   res.jsonp(data.kidsAcademyQuestions);
});

router.get('/schoolAcademyQuestions', function (req, res) {
   res.jsonp(data.schoolAcademyQuestions);
});

router.get('/softAcademyQuestions', function (req, res) {
   res.jsonp(data.softwareAcademyQuestions);
});


// set up server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});