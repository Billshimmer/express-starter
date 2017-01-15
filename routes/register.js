var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = function( app ){
  app.get('/', function(req, res, next) {
    res.render('layout', { title: 'layout' });
  });

  app.post('/', function (req, res) {
    res.send('Got a Post request');
  })
};
