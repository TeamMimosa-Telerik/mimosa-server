"use strict"

// dependancies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// create app
var app = express();



//config
app.use(express.static('public/'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.set('port', (process.env.PORT || 5000));

// routes
app.get('', function (req, res) {
  res.sendfile('./public/page.html');
});


app.get('algoAcademyQuestions', function (req, res) {
  res.jsonp(algoAcademyQuestions);
});

app.get('kidsAcademyQuestions', function (req, res) {
  res.jsonp(kidsAcademyQuestions);
});

app.get('schoolAcademyQuestions', function (req, res) {
  res.jsonp(schoolAcademyQuestions);
});

app.get('softAcademyQuestions', function (req, res) {
  res.jsonp(softAcademyQuestions);
});


// set up server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});